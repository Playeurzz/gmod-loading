// Variables globales
let filesNeeded = 0;
let filesTotal = 0;
let musicPlaying = false;

// Fonction appelée par GMod lors du chargement
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    // Mise à jour du nom du serveur
    document.getElementById('serverName').textContent = servername || CONFIG.serverName;
    
    // Mise à jour du nom de la map
    document.getElementById('mapName').textContent = `Map : ${mapname || 'Chargement...'}`;
    
    // Si on a un Steam ID, récupérer le nom du joueur
    if (steamid) {
        document.getElementById('steamName').textContent = `Bienvenue, joueur !`;
    }
    
    console.log('Détails du jeu reçus:', { servername, serverurl, mapname, maxplayers, steamid, gamemode });
}

// Fonction appelée lors du téléchargement des fichiers
function DownloadingFile(fileName) {
    const statusMessage = document.getElementById('statusMessage');
    
    // Raccourcir le nom du fichier s'il est trop long
    const shortFileName = fileName.length > 50 
        ? '...' + fileName.substring(fileName.length - 47) 
        : fileName;
    
    statusMessage.textContent = `Téléchargement : ${shortFileName}`;
    
    console.log('Téléchargement du fichier:', fileName);
}

// Fonction appelée pour mettre à jour le statut
function SetStatusChanged(status) {
    const statusMessage = document.getElementById('statusMessage');
    
    // Messages personnalisés selon le statut
    const statusMessages = {
        'Sending client info...': 'Envoi des informations client...',
        'Retrieving server info...': 'Récupération des informations du serveur...',
        'Requesting spawn...': 'Demande d\'apparition...',
        'Starting Lua...': 'Démarrage de Lua...',
        'Parsing game info...': 'Analyse des informations de jeu...',
        'Workshop Complete': 'Workshop terminé !',
        'Client info sent!': 'Informations envoyées !'
    };
    
    statusMessage.textContent = statusMessages[status] || status;
    
    console.log('Statut changé:', status);
}

// Fonction appelée pour mettre à jour les fichiers nécessaires
function SetFilesNeeded(needed) {
    filesNeeded = needed;
    updateProgress();
    
    console.log('Fichiers nécessaires:', needed);
}

// Fonction appelée pour mettre à jour le total de fichiers
function SetFilesTotal(total) {
    filesTotal = total;
    updateProgress();
    
    console.log('Total de fichiers:', total);
}

// Mise à jour de la barre de progression
function updateProgress() {
    const progressBar = document.querySelector('.progress-bar::before') || document.querySelector('.progress-bar');
    const progressPercent = document.getElementById('progressPercent');
    const filesDownloaded = document.getElementById('filesDownloaded');
    
    // Calculer le pourcentage
    let percent = 0;
    if (filesTotal > 0) {
        const downloaded = filesTotal - filesNeeded;
        percent = Math.floor((downloaded / filesTotal) * 100);
    }
    
    // Mettre à jour l'affichage
    progressPercent.textContent = `${percent}%`;
    
    // Mettre à jour le compteur de fichiers
    const downloaded = Math.max(0, filesTotal - filesNeeded);
    filesDownloaded.textContent = `${downloaded}/${filesTotal} fichiers`;
    
    // Animer la barre de progression
    const progressBarElement = document.querySelector('.progress-bar');
    if (progressBarElement) {
        progressBarElement.style.setProperty('--progress', `${percent}%`);
        // Utiliser un style inline pour la largeur
        const beforeElement = document.createElement('style');
        beforeElement.innerHTML = `.progress-bar::before { width: ${percent}% !important; }`;
        document.head.appendChild(beforeElement);
    }
    
    console.log('Progression:', percent + '%', `(${downloaded}/${filesTotal})`);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading screen initialisé');
    
    // Charger la configuration
    loadConfiguration();
    
    // Charger les fondateurs
    loadFounders();
    
    // Charger les règles depuis la config
    loadRules();
    
    // Initialiser la musique
    initMusic();
    
    // Animation du logo
    animateLogo();
    
    // Simuler la progression pour les tests (à supprimer en production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        simulateLoading();
    }
});

// Charger la configuration
function loadConfiguration() {
    if (typeof CONFIG !== 'undefined') {
        // Appliquer le nom du serveur par défaut
        if (CONFIG.serverName) {
            document.getElementById('serverName').textContent = CONFIG.serverName;
        }
        
        // Appliquer les couleurs personnalisées si définies
        if (CONFIG.accentColor) {
            document.documentElement.style.setProperty('--accent-color', CONFIG.accentColor);
        }
        
        console.log('Configuration chargée:', CONFIG);
    }
}

// Charger les fondateurs
function loadFounders() {
    const foundersList = document.getElementById('foundersList');
    
    if (typeof CONFIG !== 'undefined' && CONFIG.founders && CONFIG.founders.length > 0) {
        foundersList.innerHTML = '';
        CONFIG.founders.forEach(founder => {
            const founderDiv = document.createElement('div');
            founderDiv.className = 'founder-item';
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'founder-name';
            nameSpan.textContent = founder.name;
            
            const roleSpan = document.createElement('span');
            roleSpan.className = 'founder-role';
            roleSpan.textContent = founder.role || 'Fondateur';
            
            founderDiv.appendChild(nameSpan);
            founderDiv.appendChild(roleSpan);
            foundersList.appendChild(founderDiv);
        });
    } else {
        // Valeurs par défaut
        foundersList.innerHTML = '<div class="founder-item"><span class="founder-name">Fondateur 1</span><span class="founder-role">Créateur</span></div>';
    }
}

// Charger les règles du serveur
function loadRules() {
    const rulesList = document.getElementById('rulesList');
    
    if (typeof CONFIG !== 'undefined' && CONFIG.rules && CONFIG.rules.length > 0) {
        rulesList.innerHTML = '';
        CONFIG.rules.forEach(rule => {
            const li = document.createElement('li');
            li.textContent = rule;
            rulesList.appendChild(li);
        });
    }
}

// Initialiser la musique
function initMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');
    
    if (!bgMusic || !musicBtn) return;
    
    // Vérifier si la musique est activée dans la config
    if (typeof CONFIG !== 'undefined' && CONFIG.enableMusic) {
        // Définir le volume initial
        const initialVolume = CONFIG.musicVolume || 0.3;
        bgMusic.volume = initialVolume;
        volumeSlider.value = initialVolume * 100;
        volumeValue.textContent = Math.round(initialVolume * 100) + '%';
        
        // Contrôle du volume avec le slider
        volumeSlider.addEventListener('input', function() {
            const volume = this.value / 100;
            bgMusic.volume = volume;
            volumeValue.textContent = this.value + '%';
            
            // Changer l'icône selon le volume
            const volumeIcon = document.querySelector('.volume-icon');
            if (volumeIcon) {
                if (volume === 0) {
                    volumeIcon.textContent = '🔇';
                } else if (volume < 0.5) {
                    volumeIcon.textContent = '🔉';
                } else {
                    volumeIcon.textContent = '🔊';
                }
            }
        });
        
        // Bouton de contrôle de la musique
        musicBtn.addEventListener('click', function() {
            if (musicPlaying) {
                // Arrêter la musique
                bgMusic.pause();
                musicPlaying = false;
                musicIcon.textContent = '🔇';
                musicText.textContent = 'Musique OFF';
                musicBtn.classList.remove('playing');
            } else {
                // Jouer la musique
                bgMusic.play().then(() => {
                    musicPlaying = true;
                    musicIcon.textContent = '🔊';
                    musicText.textContent = 'Musique ON';
                    musicBtn.classList.add('playing');
                }).catch(e => {
                    console.log('Impossible de jouer la musique:', e);
                    alert('Cliquez sur le bouton pour activer la musique !');
                });
            }
        });
        
        // Tenter de jouer automatiquement (peut être bloqué)
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicIcon.textContent = '🔊';
            musicText.textContent = 'Musique ON';
            musicBtn.classList.add('playing');
        }).catch(e => {
            console.log('Lecture automatique bloquée. Cliquez sur le bouton pour activer la musique.');
        });
    } else {
        // Cacher le contrôle si la musique est désactivée
        const musicControl = document.getElementById('musicControl');
        if (musicControl) {
            musicControl.style.display = 'none';
        }
    }
}

// Animation du logo
function animateLogo() {
    const logo = document.getElementById('logo');
    if (logo && logo.complete) {
        logo.style.opacity = '1';
    } else if (logo) {
        logo.addEventListener('load', function() {
            logo.style.opacity = '1';
        });
        // Image par défaut si le logo ne charge pas
        logo.addEventListener('error', function() {
            logo.style.display = 'none';
        });
    }
}

// Simulation de chargement pour les tests
function simulateLoading() {
    console.log('Mode test : simulation du chargement');
    
    GameDetails(
        CONFIG.serverName || 'Serveur de Test',
        'test.com',
        'gm_construct',
        32,
        'STEAM_0:1:12345678',
        'sandbox'
    );
    
    SetFilesTotal(100);
    
    let current = 100;
    const interval = setInterval(() => {
        if (current <= 0) {
            clearInterval(interval);
            SetStatusChanged('Chargement terminé !');
            return;
        }
        
        current -= Math.floor(Math.random() * 5) + 1;
        SetFilesNeeded(Math.max(0, current));
        
        if (Math.random() > 0.7) {
            DownloadingFile(`materials/models/test_${current}.vtf`);
        }
    }, 200);
}
