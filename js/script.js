let nameOfPlayer = document.getElementById('name');
let buttonLanch = document.getElementById('buttonLanch');
let welcomeMessage = document.getElementById('message');
let playerCharacter = document.getElementById('playerCharacter');
let playerLevel = document.getElementById('playerLevel');
let playerLife = document.getElementById('playerLife');
let playerExperience = document.getElementById('playerExperience');
let monsterName = document.getElementById('monsterName');
let monsterLevel = document.getElementById('monsterLevel');
let monsterLife = document.getElementById('monsterLife');
let dialogue = document.getElementById('dialogue');
// on récupère le nom du joueur 
let name = nameOfPlayer;
// création des personnages
class Character{
    constructor(name, level, life, experience){
        this.name = name;
        this.level = level;
        this.life = life;
        this.experience = experience;
    }
}

let player = new Character(name.value, 1, 60, 0);
let monster = new Character("Gobelin", 1, 100, 0);

let allCharacter = [player, monster];
// message de bienvenue + géneration des personnages
function onConfirm(){
    welcomeMessage.innerHTML = "Bienvenue dans Donjons & Dragons " + name.value + ", que l'aventure commence !";
    playerCharacter.innerHTML = " " + name.value;
    playerLevel.innerHTML = " " + player.level;
    playerLife.innerHTML =  " " + player.life + "/60";
    playerExperience.innerHTML = " " + player.experience + "/10";
    dialogue.innerHTML = "test";
    monsterName.innerHTML = " " + monster.name;
    monsterLevel.innerHTML = " " + monster.level;
    monsterLife.innerHTML =  " " + monster.life + "/100";
    nameOfPlayer.value = "";
    dialogue.value = "";
}

buttonLanch.addEventListener('click', onConfirm,);
// on récupère les inputs des attaques
const inputFirstAttack = document.getElementById('inputFirstAttack');
const inputSecondAttack = document.getElementById('inputSecondAttack');
const inputThirdAttack = document.getElementById('inputThirdAttack');
// on crée les attaques du joueurs
class PlayerAttack{
    constructor(name, damage, healing){
        this.name = name;
        this.damage = damage;
        this.healing = healing;
    }
}

let firstAttack = new PlayerAttack("Coup d'epée", 10);
let secondAttack = new PlayerAttack("Soin", '', 7);
// on crée les attaques du monstre
class MonsterAttack{
    constructor(name, damage, healing){
        this.name = name;
        this.damage = damage;
        this.healing = healing; 
    }
}

let monsterFirstAttack = new MonsterAttack("Coup d'epée", 8);
let monsterSecondAttack = new MonsterAttack("Coup de bouclier", 6);
let monsterThirdAttack = new MonsterAttack("Soin", '', 5);

let allMonsterAttack = [monsterFirstAttack, monsterSecondAttack, monsterThirdAttack];
//fonction du combat du joueur
function playerHit(){
    for(let monster of allCharacter){
        monster.life = monster.life - firstAttack.damage;
        monsterLife.innerHTML =  " " + monster.life + "/100";
        if(monster.life < 0){
            break;
        };
    };
}
//fonction du soin
function care(){
    for(let player of allCharacter){
        if(player.life < 60){
            let h =  player.life + secondAttack.healing;
            dialogue.innerHTML = "Une lumière divine vous entoure";
            playerLife.innerHTML = " " + player.life + "/60";
        }else if(player.life = 60){
            dialogue.innerHTML = "Vos points de vie sont déjà au maximun !";
            playerLife.innerHTML = " " + player.life + "/60"; 
        };
    };
}
//fonction de la mort des personnages 
function death(){
    if(player.life < 0){
        dialogue.innerHTML = "Vous êtes mort, vous n'étiez pas encore prêts pour ce monde...";
    }else if(monster.life < 0){
        dialogue.innerHTML = "Vous avez terassé cette ignoble gobelin ! Il n'avait aucune chance !";
    };
}
//fonction de la fuite
function back(){
    dialogue.innerHTML = "Vous fuyez telle un lâche, vous n'êtes pas encore prêts pour ce monde...";
    welcomeMessage.innerHTML = "GAME OVER";
}

inputFirstAttack.addEventListener('click', playerHit);
inputSecondAttack.addEventListener('click', care);
inputThirdAttack.addEventListener('click', back);