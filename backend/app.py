"""
Portfolio Backend API
Flask 3.1.2 avec Python 3.13.2
Développé pour un étudiant en BUT 3 Informatique
"""

from flask import Flask, jsonify
from flask_cors import CORS
from werkzeug.exceptions import HTTPException
from typing import TypedDict


# ============================================================================
# Type Definitions (Typage moderne Python 3.13+)
# ============================================================================

class Project(TypedDict):
    id: int
    titre: str
    description: str
    tags: list[str]
    lien_github: str
    image_placeholder: str


class Skill(TypedDict):
    nom: str
    niveau: int  # sur 10
    categorie: str


class TimelineEvent(TypedDict):
    annee: str
    titre: str
    etablissement: str
    description: str


class PortfolioData(TypedDict):
    projects: list[Project]
    skills: list[Skill]
    timeline: list[TimelineEvent]


# ============================================================================
# Application Factory
# ============================================================================

def create_app() -> Flask:
    """Factory pattern pour créer l'application Flask."""
    app = Flask(__name__)
    
    # Configuration CORS pour Angular (localhost:4200)
    CORS(app, origins=["http://localhost:4200"])
    
    # Configuration de sécurité
    app.config.update(
        JSON_SORT_KEYS=False,
        JSONIFY_PRETTYPRINT_REGULAR=True,
    )
    
    register_routes(app)
    register_error_handlers(app)
    
    return app


# ============================================================================
# Données fictives - Portfolio BUT 3 Informatique
# ============================================================================

PROJECTS: list[Project] = [
    {
        "id": 1,
        "titre": "E-Commerce Microservices",
        "description": "Architecture microservices complète pour une plateforme e-commerce. Inclut la gestion des utilisateurs, le catalogue produits, le panier et le système de paiement. Déployé avec Docker et Kubernetes.",
        "tags": ["Java", "Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "RabbitMQ"],
        "lien_github": "https://github.com/alex-music/ecommerce-microservices",
        "image_placeholder": "https://placehold.co/600x400/1a1a2e/16213e?text=E-Commerce+API"
    },
    {
        "id": 2,
        "titre": "TaskFlow - Gestionnaire de Projets",
        "description": "Application web collaborative de gestion de projets inspirée de Trello. Fonctionnalités de drag & drop, assignation de tâches, notifications en temps réel via WebSockets.",
        "tags": ["Angular", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
        "lien_github": "https://github.com/alex-music/taskflow",
        "image_placeholder": "https://placehold.co/600x400/0f3460/e94560?text=TaskFlow"
    },
    {
        "id": 3,
        "titre": "SecureChat - Messagerie Chiffrée",
        "description": "Application de messagerie instantanée avec chiffrement de bout en bout. Implémentation des protocoles de sécurité modernes et authentification à deux facteurs.",
        "tags": ["Python", "Flask", "React", "WebCrypto API", "Redis", "JWT"],
        "lien_github": "https://github.com/alex-music/securechat",
        "image_placeholder": "https://placehold.co/600x400/533483/e94560?text=SecureChat"
    },
    {
        "id": 4,
        "titre": "DataViz Dashboard",
        "description": "Tableau de bord interactif pour la visualisation de données. Graphiques dynamiques, filtres avancés et export de rapports PDF. Intégration avec diverses sources de données.",
        "tags": ["Vue.js", "D3.js", "Python", "FastAPI", "Pandas", "Chart.js"],
        "lien_github": "https://github.com/alex-music/dataviz-dashboard",
        "image_placeholder": "https://placehold.co/600x400/1a1a2e/00d9ff?text=DataViz"
    },
    {
        "id": 5,
        "titre": "DevOps Pipeline Automation",
        "description": "Infrastructure as Code pour l'automatisation complète du cycle CI/CD. Scripts Terraform, configurations Ansible et pipelines GitLab CI optimisés.",
        "tags": ["Terraform", "Ansible", "GitLab CI", "AWS", "Linux", "Bash"],
        "lien_github": "https://github.com/alex-music/devops-automation",
        "image_placeholder": "https://placehold.co/600x400/2d4059/ea5455?text=DevOps"
    },
    {
        "id": 6,
        "titre": "AI Image Classifier",
        "description": "Modèle de deep learning pour la classification d'images médicales. Réseau de neurones convolutif entraîné sur un dataset de radiographies avec une précision de 94%.",
        "tags": ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Jupyter"],
        "lien_github": "https://github.com/alex-music/ai-image-classifier",
        "image_placeholder": "https://placehold.co/600x400/0f0f0f/00ff88?text=AI+Classifier"
    }
]

SKILLS: list[Skill] = [
    # Langages de programmation
    {"nom": "Python", "niveau": 9, "categorie": "Langages"},
    {"nom": "Java", "niveau": 8, "categorie": "Langages"},
    {"nom": "TypeScript", "niveau": 8, "categorie": "Langages"},
    {"nom": "JavaScript", "niveau": 8, "categorie": "Langages"},
    {"nom": "C/C++", "niveau": 6, "categorie": "Langages"},
    {"nom": "SQL", "niveau": 8, "categorie": "Langages"},
    
    # Frameworks & Libraries
    {"nom": "Angular", "niveau": 8, "categorie": "Frontend"},
    {"nom": "React", "niveau": 7, "categorie": "Frontend"},
    {"nom": "Vue.js", "niveau": 6, "categorie": "Frontend"},
    {"nom": "Flask", "niveau": 9, "categorie": "Backend"},
    {"nom": "Spring Boot", "niveau": 7, "categorie": "Backend"},
    {"nom": "Node.js", "niveau": 7, "categorie": "Backend"},
    
    # Bases de données
    {"nom": "PostgreSQL", "niveau": 8, "categorie": "Base de données"},
    {"nom": "MongoDB", "niveau": 7, "categorie": "Base de données"},
    {"nom": "Redis", "niveau": 6, "categorie": "Base de données"},
    
    # DevOps & Cloud
    {"nom": "Docker", "niveau": 8, "categorie": "DevOps"},
    {"nom": "Kubernetes", "niveau": 6, "categorie": "DevOps"},
    {"nom": "Git", "niveau": 9, "categorie": "DevOps"},
    {"nom": "Linux", "niveau": 8, "categorie": "DevOps"},
    {"nom": "AWS", "niveau": 6, "categorie": "Cloud"},
    
    # Méthodologies
    {"nom": "Agile/Scrum", "niveau": 8, "categorie": "Méthodologies"},
    {"nom": "Clean Code", "niveau": 8, "categorie": "Méthodologies"},
    {"nom": "TDD", "niveau": 7, "categorie": "Méthodologies"},
]

TIMELINE: list[TimelineEvent] = [
    {
        "annee": "2023 - 2026",
        "titre": "BUT Informatique",
        "etablissement": "IUT de Lyon - Université Claude Bernard",
        "description": "Formation complète en informatique : développement web, bases de données, réseaux, sécurité et gestion de projets. Parcours Réalisation d'Applications avec spécialisation en développement full-stack."
    },
    {
        "annee": "2024",
        "titre": "Stage Développeur Full-Stack",
        "etablissement": "TechStart Solutions - Lyon",
        "description": "Stage de 12 semaines en entreprise. Développement d'une application web interne avec Angular et Spring Boot. Participation aux sprints Agile et revue de code."
    },
    {
        "annee": "2025",
        "titre": "Alternance Ingénieur Logiciel",
        "etablissement": "Digital Factory - Paris",
        "description": "Alternance en 3ème année. Conception et développement de microservices cloud-native. Mise en place de pipelines CI/CD et monitoring avec Prometheus/Grafana."
    },
    {
        "annee": "2023",
        "titre": "Baccalauréat Général",
        "etablissement": "Lycée du Parc - Lyon",
        "description": "Baccalauréat avec spécialités Mathématiques et NSI (Numérique et Sciences Informatiques). Mention Très Bien. Projet de terminale : développement d'un jeu vidéo en Python."
    },
    {
        "annee": "2022",
        "titre": "Hackathon - 1ère Place",
        "etablissement": "Nuit de l'Info - Lyon",
        "description": "Première place au hackathon national avec une équipe de 5 étudiants. Développement d'une application web de sensibilisation au changement climatique en 24 heures."
    }
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
        data: PortfolioData = {
            "projects": PROJECTS,
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
