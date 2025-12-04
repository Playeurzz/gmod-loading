// ═══════════════════════════════════════════════════════════════
// CONFIGURATION DU LOADING SCREEN
// ═══════════════════════════════════════════════════════════════
// Personnalisez facilement votre loading screen ici !

const CONFIG = {
    
    // ═══════════════════════════════════════════════════════════
    // 🎮 INFORMATIONS DU SERVEUR
    // ═══════════════════════════════════════════════════════════
    
    // Nom de votre serveur (affiché en haut)
    serverName: "LePtitChaos RP,
    
    // Description du serveur (optionnel)
    serverDescription: "Le meilleur serveur Garry's Mod !",
    
    
    // ═══════════════════════════════════════════════════════════
    // 👑 FONDATEURS DU SERVEUR
    // ═══════════════════════════════════════════════════════════
    
    founders: [
        {
            name: "Zetrap",
            role: "Fondateur"
        },
        {
            name: "Gary Novack",
            role: "Zetrap"
        },
    ],
    
    
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
    
    // ⚠️ IMPORTANT: Activer la musique (true/false)
    enableMusic: true,
    
    // Volume de la musique (0.0 à 1.0)
    // 0.0 = muet, 0.5 = moyen, 1.0 = volume maximum
    musicVolume: 0.9,
    
    // Chemin vers le fichier audio (MP3 recommandé)
    // Placez votre fichier dans un dossier "music/"
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
        "📢 Utilisez /report pour signaler un problème",
        "🎯 Amusez-vous et profitez du serveur !"
    ],
    
    
    // ═══════════════════════════════════════════════════════════
    // 🔗 LIENS UTILES (optionnel)
    // ═══════════════════════════════════════════════════════════
    
    // Afficher les liens dans le footer (true/false)
    showLinks: false,
    
    links: {
        website: "https://monserveur.com",
        discord: "https://discord.gg/votreserveur",
        forum: "https://forum.monserveur.com",
        shop: "https://boutique.monserveur.com"
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

