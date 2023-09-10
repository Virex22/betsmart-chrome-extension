# BetSmart Analyzer - Extension Chrome pour les paris sportifs

## Aperçu

BetSmart Analyzer est une extension Chrome qui vous aide à analyser les matchs de football en cours pour prendre des décisions de paris plus éclairées. L'extension récupère des données en temps réel sur les matchs, calcule les statistiques pertinentes et fournit des indicateurs pour vous aider à identifier les opportunités de paris.

## Fonctionnalités

- Récupération des données en temps réel sur les matchs de football.
- Calcul des statistiques de match telles que le nombre de buts par minute pour invalider le pari.
- Indicateurs pour évaluer l'intérêt des paris en fonction des statistiques.
- Intégration de l'analyse des tendances de paris précédents.

## Comment tester l'extension

Suivez ces étapes simples pour tester BetSmart Analyzer sur votre navigateur Chrome :

1. **Téléchargement du code source** :
    - Clonez ce répertoire sur votre ordinateur

2. **Installation des dépendances** :
    - Assurez-vous d'avoir Node.js et npm installés sur votre ordinateur.
    - Ouvrez un terminal, accédez au répertoire du projet et exécutez la commande suivante pour installer les dépendances :
      ```
      npm install
      ```

3. **Démarrage en mode développement** :
    - Exécutez la commande suivante pour lancer l'extension en mode développement :
      ```
      npm run start
      ```
    - L'extension s'ouvrira dans une nouvelle fenêtre de navigateur.

4. **Charger l'extension** :
    - Build l'extension en exécutant la commande suivante :
      ```
      npm run build
      ```
    - Dans votre navigateur Chrome, ouvrez la page `chrome://extensions/`.
    - Activez le mode développeur (en haut à droite).
    - Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le répertoire du projet où vous avez build l'extension.

5. **Utilisation de l'extension** :
    - Vous verrez l'icône de BetSmart Analyzer dans la barre d'outils de Chrome. Cliquez dessus pour ouvrir la popup de l'extension et commencez à l'utiliser.
