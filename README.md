# EcoBlissBath

Projet e-commerce développé avec Angular. Ce dépôt contient également des tests E2E automatisés avec **Cypress**, exécutés dans un environnement **Dockerisé**.

---

## 📦 Technologies principales
- Angular 13
- Docker / Docker Compose
- Cypress (tests end-to-end)

---

## 🐳 Installation du projet avec Docker

1. Téléchargez ou clonez le dépôt :
```bash
git clone https://github.com/ton-utilisateur/EcoBlissBath.git
cd EcoBlissBath
```

2. Depuis un terminal dans le dossier du projet, lancez la commande :
```bash
sudo docker-compose up --build
```

**NB :**  
- Si vous êtes sous **Windows**, **ne pas utiliser `sudo`** (sauf pour les dernières versions de Windows 11 avec WSL activé).
- Docker Desktop configure automatiquement les droits nécessaires.

3. Ouvrez le site à l'adresse suivante :
```
http://localhost:8080
```

---

## 🔧 Exécuter les tests Cypress

1. Ouvrir l’interface Cypress :
```bash
npx cypress open
```

2. Sélectionner les fichiers de test à exécuter :
- `connexionExistante.cy.js`
- `panier.cy.js`
- `api.cy.js`
- `smoke.cy.js`

3. Exécuter tous les tests en mode headless :
```bash
npx cypress run
```

---

## 🧪 Commandes Angular utiles (si vous développez sans Docker)

### Serveur de développement
```bash
ng serve
```
➡️ Accès à l’application sur `http://localhost:4200/`

### Générer un composant
```bash
ng generate component nom-du-composant
```

### Build du projet
```bash
ng build
```

### Tests unitaires (Karma)
```bash
ng test
```

---

## 📊 Générer un rapport de test (optionnel)

Utilisez [mochawesome](https://www.npmjs.com/package/mochawesome) pour générer un rapport HTML/JSON des résultats Cypress.

---

## 📎 Liens utiles

- [Angular CLI Guide](https://angular.io/cli)
- [Cypress Documentation](https://docs.cypress.io/)
- [Docker Documentation](https://docs.docker.com/)

---

Pour toute question, contactez l'équipe de test ou consultez le rapport de campagne de test fourni.
