function createCharacter(charName, catName = null, initialSkills = [0, 0, 0]) {
   //Input may be a skill, which will be a non - empty string (which may or may not be included in the object)
    function levelUp(skill) {
        if (typeof this[skill] === "number" && this[skill] < 10)
            {
                this[skill]++;
            }
    }

   //Input may be any number of non - empty strings
   function grabItems(...items) {
    this.inventory.push(...items);
    }

   function dropItem(item) {
    let itemInventoryIndex = this.inventory.indexOf(item);
    
    if (itemInventoryIndex !== -1)
        {
            this.inventory.splice(itemInventoryIndex, 1);
        }
    }

    let fishingSkill = Number(initialSkills[0]);
    let miningSkill = Number(initialSkills[1]);
    let farmingSkill = Number(initialSkills[2]);
    
    fishingSkill = fishingSkill > 10 ? 10 : fishingSkill;
    miningSkill = miningSkill > 10 ? 10 : miningSkill;
    farmingSkill = farmingSkill > 10 ? 10 : farmingSkill;

    let character = {                 
        characterName: charName,
        fishingSkill: fishingSkill,
        miningSkill: miningSkill,
        farmingSkill: farmingSkill,
        inventory: [],
        levelUp: levelUp, 
        grabItems: grabItems,
        dropItem: dropItem
    };

    if (catName !== null)
        {
            character.catName = catName;
        }

    return character;                   
}

function describeCharacter(character) {

    let total = character.fishingSkill + character.miningSkill + character.farmingSkill;

    let description = character.characterName;

    if (total < 10) {
        description += " is just starting out";
    } else {
        description += " is a skilled adventurer";
    }

    if ("catName" in character)
        {
            description += ` and has a cat ${character.catName}`;
        }

    description += ".";

    console.log(description);

    return description;                 
}

/*let myChar = createCharacter("John", "Kitty", [2, 3, 4])
describeCharacter(myChar)
myChar.levelUp("fishingSkill")
console.log(myChar.fishingSkill)
myChar.grabItems("Apple", "Peach")
myChar.dropItem("Apple")
console.log(...myChar.inventory)
describeCharacter(myChar)*/
