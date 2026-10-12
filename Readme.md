# Activité 1
# I. Mise en place initiale
## 1. Environnement
- Machine physique : Windows 11, client SSH OpenSSH
- VM : Ubuntu 26.04 LTS sous VirtualBox
- Utilisateur de la VM : `ferid`
- Réseau de la VM : adaptateur 1 en accès par pont, IP `192.168.100.88`

## 2. Configuration côté VM
```bash
sudo apt update
sudo apt install openssh-server
systemctl status ssh        # doit afficher "active (running)"
ip a                        # pour relever l'adresse IP
```
### Capture 1 : service SSH actif dans la VM

![Statut du service ssh](images/sshd.png)

### Test depuis la machine physique
```powershell
ssh ferid@192.168.100.88
```
À la première connexion, l'empreinte du serveur est acceptée (`yes`) et
enregistrée dans `C:\Users\fersd\.ssh\known_hosts`.

### Capture 2 : connexion SSH réussie

![Connexion SSH réussie](images/ssh.png)

![Connexion SSH réussie](images/ssh2.png)


### Authentification par clé 
```powershell
ssh-keygen -t ed25519
scp $env:USERPROFILE\.ssh\id_ed25519.pub ferid@192.168.100.88:/tmp/key.pub
```
Dans la VM : ajout de la clé dans `~/.ssh/authorized_keys`
(droits : `chmod 700 ~/.ssh`, `chmod 600 ~/.ssh/authorized_keys`).

| Clé | Emplacement |
|---|---|
| Clé privée (client) | `C:\Users\<nom>\.ssh\id_ed25519` |
| Clé publique (client) | copiée dans `/home/ferid/.ssh/authorized_keys` (VM) |
| Clés du serveur | `/etc/ssh/ssh_host_*` (VM) |

## 3. Installation de Docker sur la VM

Méthode officielle : dépôt APT de Docker (Ubuntu 26.04 « resolute » est supporté).
Les commandes sont exécutées dans la VM (directement ou via SSH).

### 3.1. Supprimer les paquets susceptibles d'entrer en conflit

```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do
  sudo apt remove -y $pkg
done
```

### 3.2. Ajouter le dépôt officiel Docker

```bash
sudo apt update
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```

### 3.3. Installer Docker Engine

```bash
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 3.4. Vérifier l'installation

```bash
sudo systemctl status docker     # doit afficher "active (running)"



docker --version



```
#### Capture d'écran

![Docker installé ](images/docker-test.png)

#### Capture d'écran

![Version Docker](images/docker-version.png)


## 4. Installation de Jenkins en tant que service

Méthode officielle : dépôt APT de Jenkins (version LTS) avec OpenJDK 21.
Les commandes sont exécutées dans la VM (via SSH).

### 4.1. Installer Java 21

```bash
sudo apt update
sudo apt install -y fontconfig openjdk-21-jre
java -version
```

### 4.2. Ajouter le dépôt officiel Jenkins

```bash
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key

echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" \
  | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt update
```

### 4.3. Installer Jenkins

```bash
sudo apt install -y jenkins
```

### 4.4. Activer et démarrer le service

```bash
sudo systemctl enable --now jenkins
sudo systemctl status jenkins     # doit afficher "active (running)"
```
#### capture

![Jenkins Running](images/jenkins-running.png)
Le service démarre automatiquement au boot (`enable`) et écoute sur le port 8080.

### 4.5. Ouvrir le port 8080 (si le pare-feu UFW est actif)

```bash
sudo ufw status
sudo ufw allow 8080/tcp
```

### 4.6. Récupérer le mot de passe initial

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

### 4.7. Vérification depuis la machine physique

Dans PowerShell sous Windows :

```powershell
Test-NetConnection 192.168.100.88 -Port 8080
```

Puis dans le navigateur Windows : `http://192.168.100.88:8080`

La page « Unlock Jenkins » s'affiche : saisir le mot de passe initial, puis
installer les plugins suggérés et créer l'administrateur.

#### Capture d'écran

![Installation Jenkins](images/installation-jenkins.png)

*La capture montre le navigateur Windows sur `http://192.168.100.88:8080`
affichant l'interface Jenkins.*

![Jenkins accessible depuis la machine physique](images/tableau-de-bord-jenkins.png)



## 5. mini CV One Page 

https://github.com/ferid-saad/cv-ferid-saad

https://ferid-saad.github.io/cv-ferid-saad/

![ CV-Ferid SAAD](images/cv-ferid-saad1.png)


## 6. Configuration du push GitHub via SSH

1. Génération de la clé : `ssh-keygen -t ed25519 -C "fersd2018@gmail.com"`
2. Ajout de la clé publique dans GitHub (Settings → SSH and GPG keys → New SSH key)
3. Test de la connexion : `ssh -T git@github.com`
4. Passage du dépôt en SSH : `git remote set-url origin git@github.com:ferid-saad/cv-ferid-saad.git`

![Test SSH GitHub](images/ssh-github.png)


![Test SSH GitHub](images/test-connexion-ssh.png)


# II. Évolution du mini-CV vers DevSecOps Portfolio

## 7.DevSecOps Portfolio 

![DevSecOps-skills](images/DevSecOps-skills.png)