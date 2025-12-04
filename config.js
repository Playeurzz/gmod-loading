// ═══════════════════════════════════════════════════════════════
// CONFIGURATION DU LOADING SCREEN
// ═══════════════════════════════════════════════════════════════
// Personnalisez facilement votre loading screen ici !

const CONFIG = {
    
    // ═══════════════════════════════════════════════════════════
    // 🎮 INFORMATIONS DU SERVEUR
    // ═══════════════════════════════════════════════════════════
    
    // Nom de votre serveur (affiché en haut)
    serverName: "LePtitChaos RP",
    
    // Description du serveur (optionnel)
    serverDescription: "Le meilleur serveur Garry's Mod !",
    
    
    // ═══════════════════════════════════════════════════════════
    // 🎨 PERSONNALISATION VISUELLE
    // ═══════════════════════════════════════════════════════════
    
    // Couleur principale (format hexadécimal)
    // Exemples: "#4299e1" (bleu), "#48bb78" (vert), "#f56565" (rouge)
    accentColor: "#4299e1",
    
    // Afficher le logo (true/false)
    showLogo: true,
    
    
    // ═══════════════════════════════════════════════════════════
    // 🎵 MUSIQUE DE FOND
    // ═══════════════════════════════════════════════════════════
    
    // Activer la musique de fond (true/false)
    enableMusic: true,
    
    // Volume de la musique (0.0 à 1.0)
    // 0.0 = muet, 1.0 = volume maximum
    musicVolume: 0.2,
    
    // Chemin vers le fichier audio (MP3 recommandé)
    musicPath: "music/background.mp3",
    
    
    // ═══════════════════════════════════════════════════════════
    // 📋 RÈGLES DU SERVEUR
    // ═══════════════════════════════════════════════════════════
    
    rules: [
        "✅ Respectez tous les joueurs",
        "🚫 Pas de RDM (Random Deathmatch)",
        "🚫 Pas de NLR (New Life Rule)",
        "💬 Restez poli dans le chat vocal et écrit",
        "🎮 Jouez votre rôle correctement (No FailRP)",
        "🚫 Pas de prop abuse ou prop kill",
        "⚠️ Respectez les décisions des administrateurs",
        "📢 Utilisez /report pour signaler un problème"
    ],
    
    
    // ═══════════════════════════════════════════════════════════
    // 🔗 LIENS UTILES (optionnel)
    // ═══════════════════════════════════════════════════════════
    
    // Afficher les liens dans le footer (true/false)
    showLinks: true,
    
    links: {
        website: "https://discord.gg/rVzN8DnsvD",
        discord: "https://discord.gg/rVzN8DnsvD",
        forum: "https://discord.gg/rVzN8DnsvD",
        shop: "https://discord.gg/rVzN8DnsvD"
    },
    
    
    // ═══════════════════════════════════════════════════════════
    // 📱 RÉSEAUX SOCIAUX (optionnel)
    // ═══════════════════════════════════════════════════════════
    
    social: {
        youtube: "https://youtube.com/@votrechaine",
        twitter: "https://twitter.com/votrecompte",
        tiktok: "https://tiktok.com/@votrecompte"
    },
    
    
    // ═══════════════════════════════════════════════════════════
    // ⚙️ PARAMÈTRES AVANCÉS
    // ═══════════════════════════════════════════════════════════
    
    // Afficher les messages de debug dans la console (true/false)
    debug: false,
    
    // Temps d'animation (en millisecondes)
    animationDuration: 1000,
    
    // Messages de statut personnalisés
    statusMessages: {
        connecting: "Connexion au serveur...",
        downloading: "Téléchargement des fichiers...",
        loading: "Chargement de la map...",
        ready: "Presque prêt !"
    }
    
};

// ═══════════════════════════════════════════════════════════════
// ⚠️ NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE ⚠️
// ═══════════════════════════════════════════════════════════════

// Vérification de la configuration
if (CONFIG.debug) {
    console.log("Configuration chargée:", CONFIG);
}

// Export de la configuration pour les autres scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;

}



