let nameOfPlayer = document.getElementById('name');
let button = document.getElementById('button');
let welcomeMessage = document.getElementById('message');
let playerCharacter = document.getElementById('playerCharacter');
let playerLevel = document.getElementById('playerLevel');
let playerLife = document.getElementById('playerLife');
let playerExperience = document.getElementById('playerExperience');

let name = nameOfPlayer;

class Character{
    constructor(name, level, life, experience){
        this.name = name;
        this.level = level;
        this.life = life;
        this.experience = experience;
    }
}

let player = new Character(name.value, 1, 40, 0);
let monster = new Character('Gobelin', 1, 100);

let allCharacter = [player, monster];

function onConfirm(){
    welcomeMessage.innerHTML = "Bienvenue dans Donjons & Dragons " + name.value + ", que l'aventure commence !";
    playerCharacter.innerHTML = " " + name.value;
    playerLevel.innerHTML = " " + player.level;
    playerLife.innerHTML =  " " + player.life + "/40";
    playerExperience.innerHTML = " " + player.experience + "/10";
    nameOfPlayer.value = "";
}

button.addEventListener('click', onConfirm,);

let monsterName = document.getElementById('monsterName');
let monsterLevel = document.getElementById('monsterLevel');
let monsterLife = document.getElementById('monsterLife');
let dialogue = document.getElementById('dialogue');
let buttonLanch = document.getElementById('buttonLanch');

function lanchDialogue(){
    dialogue.innerHTML = "test";
    monsterName.innerHTML = " " + monster.name;
    monsterLevel.innerHTML = " " + monster.level;
    monsterLife.innerHTML =  " " + monster.life + "/100";
    dialogue.value = "";
}

buttonLanch.addEventListener('click', lanchDialogue);

const firstAttack = document.getElementById('firstAttack');
const secondAttack = document.getElementById('secondAttack');
const thirdAttack = document.getElementById('thirdAttack');
const fourthAttack = document.getElementById('fourthAttack');

class Attack{
    constructor(damage, healing){
        this.damage = damage;
        this.healing = healing;
    }
}

let swordStrike = new Attack(10);
let shieldBash = new Attack(5);
let heal = new Attack(0, 5);

function death(){
    if(player.life === 0){
        dialogue.innerHTML = "Vous êtes mort, vous n'étiez pas encore prêts pour ce monde...";
    };
    if(monster.life === 0){
        dialogue.innerHTML = "Vous avez terassé cette ignoble gobelin ! Il n'avait aucune chance !";
    };
}

function sword(){
    for(let monster of allCharacter){
        monster.life = monster.life - swordStrike.damage;
        if(monster.life === 0){
            break;
        };
    }
    monsterLife.innerHTML =  " " + monster.life + "/100";
    dialogue.innerHTML = "Vous lui assenez un coup d'epée !";
}

function shield(){
    for(let monster of allCharacter){
        monster.life = monster.life - shieldBash.damage;
        if(monster.life === 0){
            break;
        }
    }
    monsterLife.innerHTML =  " " + monster.life + "/100";
    dialogue.innerHTML = "Vous lui assenez un coup de bouclier !";
}

function care(){
    if(player.life < 40){
    const c =  player.life + heal.healing;
    dialogue.innerHTML = "Une lumière divine vous entoure";
    playerLife.innerHTML = " " + c; 
    }else if(player.life = 40) {
    dialogue.innerHTML = "Vos points de vie sont déjà au maximun !";
    };
}

function back(){
    dialogue.innerHTML = "Vous fuyez telle un lâche, vous n'êtes pas encore prêts pour ce monde...";
    welcomeMessage.innerHTML = "GAME OVER";
}

firstAttack.addEventListener('click', sword,);
secondAttack.addEventListener('click', shield,);
thirdAttack.addEventListener('click', care);
fourthAttack.addEventListener('click', back);