"""
Portfolio Backend API
Flask 3.1.2 avec Python 3.13.2
Développé pour un étudiant en BUT 3 Informatique
Intégration API GitHub pour récupérer les projets dynamiquement
"""

from flask import Flask, jsonify
from flask_cors import CORS
from werkzeug.exceptions import HTTPException
from typing import TypedDict
import requests
from datetime import datetime, timedelta


# ============================================================================
# Type Definitions (Typage moderne Python 3.13+)
# ============================================================================

class Project(TypedDict):
    id: int
    titre: str
    description: str
    tags: list[str]
    lien_github: str
    stars: int
    updated_at: str


class Skill(TypedDict):
    nom: str
    niveau: int  # sur 10
    categorie: str


class TimelineEvent(TypedDict):
    annee: str
    titre: str
    etablissement: str
    description: str
    type: str  # "formation", "experience" ou "projet"


class PortfolioData(TypedDict):
    projects: list[Project]
    skills: list[Skill]
    timeline: list[TimelineEvent]


# ============================================================================
# Configuration GitHub API
# ============================================================================

GITHUB_USERNAME = "Alex16JA"
GITHUB_API_URL = f"https://api.github.com/users/{GITHUB_USERNAME}/repos"

# Cache pour éviter de surcharger l'API GitHub
_projects_cache: list[Project] = []
_cache_timestamp: datetime | None = None
CACHE_DURATION = timedelta(minutes=10)


# ============================================================================
# Application Factory
# ============================================================================

def create_app() -> Flask:
    """Factory pattern pour créer l'application Flask."""
    app = Flask(__name__)
    
    # Configuration CORS pour Angular (localhost:4200) et Vercel (production)
    CORS(app, origins=[
        "http://localhost:4200",
        "https://aphamportfolio.vercel.app",
    ])
    
    # Configuration de sécurité
    app.config.update(
        JSON_SORT_KEYS=False,
        JSONIFY_PRETTYPRINT_REGULAR=True,
    )
    
    register_routes(app)
    register_error_handlers(app)
    
    return app


# ============================================================================
# Fonction pour récupérer les projets depuis GitHub
# ============================================================================

def fetch_github_projects() -> list[Project]:
    """
    Récupère les projets publics depuis l'API GitHub.
    Utilise un système de cache pour éviter de surcharger l'API.
    """
    global _projects_cache, _cache_timestamp
    
    # Vérifier si le cache est valide
    if _cache_timestamp and datetime.now() - _cache_timestamp < CACHE_DURATION:
        return _projects_cache
    
    try:
        # Appel à l'API GitHub
        response = requests.get(
            GITHUB_API_URL,
            headers={
                "Accept": "application/vnd.github.v3+json",
                "User-Agent": "Portfolio-Backend"
            },
            timeout=10
        )
        response.raise_for_status()
        
        repos = response.json()
        
        # Trier les repos par date de mise à jour (plus récent en premier)
        repos.sort(key=lambda r: r.get("updated_at", ""), reverse=True)
        
        # Filtrer uniquement les projets publics et transformer les données
        projects: list[Project] = []
        for idx, repo in enumerate(repos, start=1):
            # Ne garder que les repos publics (normalement déjà le cas via l'API publique)
            if repo.get("private", False):
                continue
            
            # Récupérer le langage comme tag principal
            tags = []
            if repo.get("language"):
                tags.append(repo["language"])
            
            # Ajouter des tags basés sur les topics si disponibles
            if repo.get("topics"):
                tags.extend(repo["topics"][:5])  # Limiter à 5 topics
            
            project: Project = {
                "id": idx,
                "titre": repo.get("name", "Sans titre"),
                "description": repo.get("description") or "Pas de description disponible.",
                "tags": tags if tags else ["Code"],
                "lien_github": repo.get("html_url", ""),
                "stars": repo.get("stargazers_count", 0),
                "updated_at": repo.get("updated_at", "")
            }
            projects.append(project)
        
        # Mettre à jour le cache
        _projects_cache = projects
        _cache_timestamp = datetime.now()
        
        return projects
        
    except requests.RequestException as e:
        # En cas d'erreur, retourner le cache s'il existe, sinon une liste vide
        print(f"Erreur lors de la récupération des repos GitHub: {e}")
        if _projects_cache:
            return _projects_cache
        return []

SKILLS: list[Skill] = [
    # Langages de programmation (Programmation Logiciel)
    {"nom": "Java", "niveau": 8, "categorie": "Langages"},
    {"nom": "Python", "niveau": 8, "categorie": "Langages"},
    {"nom": "C", "niveau": 7, "categorie": "Langages"},
    {"nom": "TypeScript", "niveau": 8, "categorie": "Langages"},
    {"nom": "PHP", "niveau": 6, "categorie": "Langages"},
    {"nom": "Shell", "niveau": 7, "categorie": "Langages"},
    
    # Frameworks
    {"nom": "Angular", "niveau": 9, "categorie": "Frontend"},
    {"nom": "Flask", "niveau": 8, "categorie": "Backend"},
    {"nom": "JUnit", "niveau": 7, "categorie": "Backend"},
    
    # Bases de données
    {"nom": "PostgreSQL", "niveau": 8, "categorie": "Base de données"},
    {"nom": "MySQL", "niveau": 8, "categorie": "Base de données"},
    {"nom": "MongoDB", "niveau": 7, "categorie": "Base de données"},
    
    # DevOps & Outils
    {"nom": "Docker", "niveau": 8, "categorie": "DevOps"},
    {"nom": "Git/GitHub", "niveau": 9, "categorie": "DevOps"},
    {"nom": "Linux (Ubuntu)", "niveau": 8, "categorie": "DevOps"},
    
    # Outils de conception
    {"nom": "VSCode", "niveau": 9, "categorie": "Outils"},
    {"nom": "Figma", "niveau": 7, "categorie": "Outils"},
    {"nom": "Canva", "niveau": 7, "categorie": "Outils"},
    {"nom": "Trello", "niveau": 8, "categorie": "Outils"},
    
    # Méthodologies
    {"nom": "Agile/Scrum", "niveau": 8, "categorie": "Méthodologies"},
]

TIMELINE: list[TimelineEvent] = [
    # Du plus récent au plus ancien
    # === EXPÉRIENCES PROFESSIONNELLES ===
    {
        "annee": "Juillet 2025 - Décembre 2025",
        "titre": "Équipier Polyvalent",
        "etablissement": "McDonald's",
        "description": "Travail en équipe dans un environnement à rythme soutenu (gestion des rushs). Application stricte des normes d'hygiène et de sécurité. Compétences développées : polyvalence, ponctualité.",
        "type": "experience"
    },
    {
        "annee": "Avril 2025 - Juin 2025",
        "titre": "Stage Développeur Web (Angular)",
        "etablissement": "Césarée",
        "description": "Développement Front-End avec Angular. Conception et implémentation d'interfaces utilisateurs dynamiques et réactives. Optimisation de l'expérience utilisateur (UX/UI) et debugging. Participation aux réunions techniques et collaboration avec l'équipe.",
        "type": "experience"
    },
    # === FORMATIONS ===
    {
        "annee": "2023 - Présent",
        "titre": "BUT Informatique 3ème année",
        "etablissement": "IUT de Montreuil",
        "description": "Formation complète en informatique : développement web, bases de données, réseaux et gestion de projets. Spécialisation en développement full-stack avec Angular et Flask.",
        "type": "formation"
    },
    {
        "annee": "2023",
        "titre": "Baccalauréat Général - Mention Assez Bien",
        "etablissement": "Lycée",
        "description": "Baccalauréat avec spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).",
        "type": "formation"
    },
]


# ============================================================================
# Routes
# ============================================================================

def register_routes(app: Flask) -> None:
    """Enregistre toutes les routes de l'API."""
    
    @app.route("/api/data", methods=["GET"])
    def get_portfolio_data():
        """
        Retourne toutes les données du portfolio.
        
        Returns:
            JSON: Objet contenant projects, skills et timeline
        """
        # Récupérer les projets depuis GitHub (avec cache)
        github_projects = fetch_github_projects()
        
        data: PortfolioData = {
            "projects": github_projects,
            "skills": SKILLS,
            "timeline": TIMELINE
        }
        return jsonify(data)
    
    @app.route("/api/health", methods=["GET"])
    def health_check():
        """Endpoint de santé pour vérifier que l'API fonctionne."""
        return jsonify({
            "status": "healthy",
            "version": "1.0.0",
            "message": "Portfolio API is running"
        })


# ============================================================================
# Error Handlers (Sécurité Werkzeug)
# ============================================================================

def register_error_handlers(app: Flask) -> None:
    """Enregistre les gestionnaires d'erreurs personnalisés."""
    
    @app.errorhandler(HTTPException)
    def handle_http_exception(error: HTTPException):
        """Gère toutes les exceptions HTTP de manière sécurisée."""
        response = {
            "error": error.name,
            "message": error.description,
            "code": error.code
        }
        return jsonify(response), error.code
    
    @app.errorhandler(Exception)
    def handle_generic_exception(error: Exception):
        """
        Gère les exceptions non-HTTP.
        Ne révèle pas les détails internes en production.
        """
        app.logger.error(f"Unhandled exception: {error}")
        response = {
            "error": "Internal Server Error",
            "message": "Une erreur inattendue s'est produite.",
            "code": 500
        }
        return jsonify(response), 500


# ============================================================================
# Point d'entrée
# ============================================================================

app = create_app()

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
