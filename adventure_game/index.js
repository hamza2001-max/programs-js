#! /usr/bin/env node
import inquirer from "inquirer";
const main = async () => {
    let enemies = [
        "skeleton",
        "dragon",
        "goblins",
        "beast",
        "medusa",
        "cyclops",
        "bounty hunters",
        "zombie",
        "rogue",
        "bandits",
    ];
    let averageEnemyMaxHealth = 70, averageEnemyMinDamage = 6, averageEnemyMaxDamage = 18;
    let bossHealth = 130, bossDamage = 38;
    let playerHealth = 200, playerMaxHealth = 200, playerMinDamage = 12, playerMaxDamage = 32, playerDamage;
    let healthPotions = 5, healthPotionEffect = 0, healthPotionMinEffect = 20, healthPotionMaxEffect = 30;
    let gameState = true;
    GAME: while (gameState) {
        let currentEnemy = enemies[Math.floor(Math.random() * 10)], currentEnemyDamage = 0;
        let currentEnemyHealth = Math.floor(Math.random() * averageEnemyMaxHealth) + 20;
        console.log(`Get ready for the battle!\nYou have encountered ${currentEnemy}`);
        if (currentEnemy === "dragon") {
            console.log("A BOSS has appeared");
            currentEnemyHealth = bossHealth;
        }
        while (currentEnemyHealth > 0) {
            console.log(`Player health: ${playerHealth}`);
            console.log(`Enemy health: ${currentEnemyHealth}\n`);
            if (playerHealth <= 0) {
                console.log("You Died.");
                return;
            }
            const action = await inquirer.prompt({
                type: "list",
                name: "action",
                message: "Choose your action",
                choices: ["Attack the enemy.", "Use a health potion.", "RUN!"],
            });
            switch (action.action) {
                case "Attack the enemy.":
                    playerDamage =
                        Math.floor(Math.random() * playerMaxDamage) + playerMinDamage;
                    if (currentEnemy === "dragon") {
                        currentEnemyDamage = bossDamage;
                        currentEnemyHealth -= playerDamage;
                        console.log(`Player has dealt ${playerDamage} damage to ${currentEnemy}`);
                        console.log(`Enemy health has reduced to ${currentEnemyHealth}\n`);
                        if (currentEnemyHealth <= 0) {
                            console.log("The boss has been slayen.");
                            console.log("You have conquered the dungeon.");
                            healthPotions++;
                            return;
                        }
                        playerHealth -= currentEnemyDamage;
                        console.log(`Enemy has dealt ${currentEnemyDamage} to player`);
                        console.log(`Player health has reduced to ${playerHealth}\n`);
                        break;
                    }
                    currentEnemyHealth -= playerDamage;
                    console.log(`Player has dealt ${playerDamage} damage to ${currentEnemy}`);
                    console.log(`Enemy health has reduced to ${currentEnemyHealth}\n`);
                    if (currentEnemyHealth <= 0) {
                        console.log(`${currentEnemy} has been slayen.\n`);
                        let healthPotionDropRate = Math.floor(Math.random() * 2);
                        if (healthPotionDropRate === 1) {
                            console.log("The enemy has dropped a health potion");
                            healthPotions++;
                        }
                        break;
                    }
                    currentEnemyDamage =
                        Math.floor(Math.random() * averageEnemyMaxDamage) +
                            averageEnemyMinDamage;
                    console.log(`Enemy has dealt ${currentEnemyDamage} to player`);
                    playerHealth -= currentEnemyDamage;
                    console.log(`Player health has reduced to ${playerHealth}\n`);
                    break;
                case "Use a health potion.":
                    if (healthPotions > 0) {
                        healthPotionEffect =
                            Math.floor(Math.random() * healthPotionMaxEffect) +
                                healthPotionMinEffect;
                        console.log(`The potion has an effect of ${healthPotionEffect}`);
                        if (playerHealth + healthPotionEffect > playerMaxHealth) {
                            playerHealth = playerMaxHealth;
                            console.log("You have healed completely.");
                            break;
                        }
                        playerHealth += healthPotionEffect;
                        console.log(`The health potion increase your health by ${healthPotionEffect}`);
                        healthPotions--;
                    }
                    else {
                        console.log("No potions left.");
                    }
                    break;
                case "RUN!":
                    let successFulEscape = Math.floor(Math.random() * 2);
                    if (successFulEscape == 1) {
                        console.log("You have escaped successfully.");
                        continue GAME;
                    }
                    else
                        console.log("Escape Failed");
                    break;
                default:
                    console.log("Wrong Input");
                    break;
            }
        }
    }
};
main();
