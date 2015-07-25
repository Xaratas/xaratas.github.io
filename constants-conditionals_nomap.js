//valueTypeBasicValidator: 
//  slot: 0 <= value < 6
//  guid: 8-4-4-4-12
//  percentage: 0 <= value <= 100
//  quest, conversation: string/questpath
//  allerhand enums
PoeQuestEditor.Conditionals = [{
        name: "Is Active",
        category: "General",
        xml: "Boolean IsActive(Guid)",
        description: "Checks if the Object is active (on the same map?)",
        param0: {
            name: "Object",
            description: "Object to check.",
            default: "",
            type: "Guid"
        }
    }, {
        name: "Is Companion Active In Party",
        category: "General",
        xml: "Boolean IsCompanionActiveInParty(Guid)",
        description: "Checks if the named Companion is in the current Party",
        param0: {
            name: "Companion",
            description: "Companion to check.",
            default: "",
            type: "Guid"
        }
    }, {
        name: "Is Any Companion Active In Party",
        category: "General",
        xml: "Boolean IsAnyCompanionActiveInParty()",
        description: "Checks if Party is bigger than one"
    }, {
        name: "Is Slot Active",
        category: "General",
        xml: "Boolean IsSlotActive(Int32)",
        description: "Checks if the given Party Slot is used, slot range from 0 to 5",
        param0: {
            name: "Slot",
            description: "Slot to check.",
            default: "0"
        }
    }, {
        name: "Is Player In Slot",
        category: "General",
        xml: "Boolea IsPlayerInSlot(Int32)",
        description: "Checks if the Player Charackter is in this slot. slot range from 0 to 5",
        param0: {
            name: "Slot",
            description: "Slot to check.",
            default: "0"
        }
    },

    {
        name: "Is Currently Daytime",
        category: "Time",
        xml: "Boolean IsCurrentlyDaytime()",
        description: "Checks if ingame is daytime. Daytime is from 6 to 20 o'Clock"
    }, {
        name: "Is Currently Nighttime",
        category: "Time",
        xml: "Boolean IsCurrentlyNighttime()",
        description: "Checks if ingame is nigthtime. Nighttime is from 20 to 6 o'Clock"
    },

    {
        name: "Is In Combat",
        category: "General",
        xml: "Boolean IsInCombat()",
        description: "Checks if Combat is active"
    }, {
        name: "Has Combat Time Elapsed",
        category: "General",
        xml: "Boolean HasCombatTimeElapsed(Single)",
        description: "Checks if the combat takes more or equal seconds than the given value",
        param0: {
            name: "Seconds",
            description: "The length of time in seconds to compare against combat duration.",
            default: "1.0"
        }
    }, {
        name: "Is In Stealth Mode",
        category: "General",
        xml: "Boolean IsInStealth()",
        description: "Checks stealth mode"
    },

    {
        name: "Has Been Detected",
        category: "Detectable",
        xml: "Boolean HasBeenDetected(Guid)",
        description: "Checks if the Character is detected",
        param0: {
            name: "Object",
            description: "The detectable",
            default: "",
            type: "Guid"
        }
    },

    {
        name: "Is In Volume",
        category: "General",
        xml: "Boolean IsInVolume(Guid, Guid)",
        description: "Checks if the Object 1 Int32ersects with Object 2",
        param0: {
            name: "Object",
            description: "The object to check",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Object",
            description: "The object with a collider to check against",
            default: "",
            type: "Guid"
        }
    }, {
        name: "Command Line Arg Set",
        category: "General",
        xml: "Boolean CommandLineArg(String)",
        description: "Checks if the commandline contains this argument. The game code uses \"bb\" and \"e3\".",
        param0: {
            name: "Arg",
            description: "The arg to check to see if it was set.",
            default: ""
        }
    },

    {
        name: "Is Global Value",
        category: "Globals",
        xml: "Boolean IsGlobalValue(String, Operator, Int32)",
        description: "Gives the compare result of the global variable to the value",
        param0: {
            name: "Tag",
            description: "Tag of the global variable to query.",
            default: "GlobalTag",
            type: "GlobalVariable"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Value",
            description: "Compare the global variable against this value.",
            default: "0"
        }
    }, {
        name: "Compare Globals",
        category: "Globals",
        xml: "Boolean CompareGlobals(String, Operator, String)",
        description: "Compares 2 global variables with the operator",
        param0: {
            name: "Global 1",
            description: "Tag of the first global variable to query.",
            default: "GlobalTag",
            type: "GlobalVariable"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Global 2",
            description: "Tag of the second global variable to query.",
            default: "GlobalTag",
            type: "GlobalVariable"
        }
    },

    {
        name: "Has Conversation Node Been Played",
        category: "Conversation",
        xml: "Boolean HasConversationNodeBeenPlayed(String, Int32)",
        description: "Checks if the ID of the conversation file has been played",
        param0: {
            name: "Conversation",
            description: "Name of the conversation.",
            default: "",
            type: "Conversation"
        },
        param1: {
            name: "Conversation Node ID",
            description: "Conversation node ID.",
            default: "0"
        }
    },

    {
        name: "Is Quest On Node",
        category: "Quest",
        xml: "Boolean IsQuestOnNode(String, Int32)",
        description: "Checks if the quest is currently on the given id",
        param0: {
            name: "Quest Name",
            description: "Name of the quest.",
            default: "",
            type: "Quest"
        },
        param1: {
            name: "Quest Node ID",
            description: "Quest node ID.",
            default: "0"
        }
    }, {
        name: "Is Quest Event Triggered",
        category: "Quest",
        xml: "Boolean IsQuestEventTriggered(String, Int32)",
        description: "Checks if the quest event with the given id was triggerd",
        type: "QuestEvent",
        param0: {
            name: "Quest Name",
            description: "Name of the quest.",
            default: "",
            type: "Quest"
        },
        param1: {
            name: "Quest Event ID",
            description: "Quest Event ID.",
            default: "-1"
        }
    }, {
        name: "Is Quest Addendum Triggered",
        category: "Quest",
        xml: "Boolean IsQuestAddendumTriggered(String, Int32)",
        description: "Checks if the quest addendum with the given id was triggerd",
        param0: {
            name: "Quest Name",
            description: "Name of the quest.",
            default: "",
            type: "Quest"
        },
        param1: {
            name: "Addendum ID",
            description: "Addendum ID to test.",
            default: "0"
        }
    }, {
        name: "Is Quest End State Triggered",
        category: "Quest",
        xml: "Boolean IsQuestEndStateTriggered(String, Int32)",
        description: "Checks if the quest is on this endstate",
        param0: {
            name: "Quest Name",
            description: "Name of the quest.",
            default: "",
            type: "Quest"
        },
        param1: {
            name: "End State ID",
            description: "End State ID to test.",
            default: "0"
        }
    }, {
        name: "Is Quest Failed",
        category: "Quest",
        xml: "Boolean IsQuestFailed(String)",
        description: "Checks if the quest was abborted/ failed",
        param0: {
            name: "Quest Name",
            description: "Name of the quest.",
            default: "",
            type: "Quest"
        }
    },

    {
        name: "Is Distance",
        category: "Misc",
        xml: "Boolean IsDistance(Guid, Guid, Operator, Single)",
        description: "Checks the distance between A and B against the given value",
        param0: {
            name: "Object A",
            description: "Object A to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Object B",
            description: "Object B to test.",
            default: "",
            type: "Guid"
        },
        param2: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param3: {
            name: "Value",
            description: "Compare the distance between A and B against this value.",
            default: "0"
        }
    }, {
        name: "Is Easy",
        category: "Difficulty",
        xml: "Boolean IsEasy()",
        description: "Is easy difficulty"
    }, {
        name: "Is Normal",
        category: "Difficulty",
        xml: "Boolean IsNormal()",
        description: "Is nomral difficulty"
    }, {
        name: "Is Hard",
        category: "Difficulty",
        xml: "Boolean IsHard()",
        description: "Is hard or Path Of The Damned difficulty"
    },

    {
        name: "Is Team Relationship",
        category: "Scripts\\Faction",
        xml: "Boolean IsTeamRelationship(String, String, Relationship)",
        description: "Checks if the relationship between two teams is the given value. \"player\" is the special Value for the player team.",
        param0: {
            name: "Team A",
            description: "The first team to check",
            default: ""
        },
        param1: {
            name: "Team B",
            description: "The second team to check",
            default: ""
        },
        param2: {
            name: "Relationship",
            description: "How team A and B will relate to each other",
            default: "Neutral"
        }
    },

    {
        name: "Reputation Rank Equals",
        category: "Faction",
        xml: "Boolean ReputationRankEquals(Guid, Axis, Int32)",
        description: "Checks if the Rank to this Faction is at the given amount. Valid values range from 0 to 5",
        param0: {
            name: "Object",
            description: "Object to check.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Axis",
            description: "Type of rank to check",
            default: "Benevolent"
        },
        param2: {
            name: "Ranks",
            description: "Ranks check amount",
            default: "0"
        }
    }, {
        name: "Tagged Reputation Rank Equals",
        category: "Faction",
        xml: "Boolean ReputationRankByTagEquals(FactionName, Axis, Int32)",
        description: "Checks if the Rank to this Named Faction is at a given amount. Valid values range from 0 to 5",
        param0: {
            name: "Faction Name",
            description: "Faction to modify",
            default: "None"
        },
        param1: {
            name: "Axis",
            description: "Type of rank to check",
            default: "Benevolent"
        },
        param2: {
            name: "Ranks",
            description: "Ranks check amount",
            default: "0"
        }
    }, {
        name: "Reputation Rank Greater or Equal",
        category: "Faction",
        xml: "Boolean ReputationRankGreater(Guid, Axis, Int32)",
        description: "Checks if the Rank to this Faction is greater or equal the given amount. Valid values range from 0 to 5",
        param0: {
            name: "Object",
            description: "Object to check",
            default: ""
        },
        param1: {
            name: "Axis",
            description: "Type of rank to check",
            default: "Benevolent"
        },
        param2: {
            name: "Ranks",
            description: "Ranks check amount",
            default: "0"
        }
    }, {
        name: "Tagged Reputation Rank Greater or Equal",
        category: "Faction",
        xml: "Boolean ReputationTagRankGreater(FactionName, Axis, Int32)",
        description: "Checks if the Rank to this Named Faction is greater or equal the given amount. Valid values range from 0 to 5",
        param0: {
            name: "Faction Name",
            description: "Faction to check",
            default: "None"
        },
        param1: {
            name: "Axis",
            description: "Type of rank to increase",
            default: "Benevolent"
        },
        param2: {
            name: "Ranks",
            description: "Ranks change amount",
            default: "0"
        }
    }, {
        name: "Disposition Equal",
        category: "Faction",
        xml: "Boolean DispositionEqual(Axis, Rank)",
        description: "Returns true if rank is equal to this value.",
        param0: {
            name: "Axis",
            description: "The disposition type to check",
            default: "Benevolent"
        },
        param1: {
            name: "Rank",
            description: "Returns true if rank is equal to this value.",
            default: "None"
        }
    }, {
        name: "Disposition Greater or Equal",
        category: "Faction",
        xml: "Boolean DispositionGreaterOrEqual(Axis, Rank)",
        description: "Returns true if rank is equal or greater to this value.",
        param0: {
            name: "Axis",
            description: "The disposition type to check",
            default: "Benevolent"
        },
        param1: {
            name: "Rank",
            description: "Returns true if rank is greater or equal to this value.",
            default: "None"
        }
    },

    {
        name: "Is Health Value",
        category: "Health",
        xml: "Boolean IsHealthValue(Guid, Operator, Single)",
        description: "Checks Ojbect health with given operator agains value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Health Value",
            description: "Compare the object's health against this value.",
            default: "0"
        }
    }, {
        name: "Is Health Percentage",
        category: "Health",
        xml: "Boolean IsHealthPercentage(Guid, Operator, Single)",
        description: "Checks Ojbect health with operator agains percentage (0-100)",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            type: "EqualTo"
        },
        param2: {
            name: "Health Percentage",
            description: "Compare the object's health against this percentage.",
            default: "0"
        }
    }, {
        name: "Is Stamina Value",
        category: "Health",
        xml: "Boolean IsStaminaValue(Guid, Operator, Single)",
        description: "Checks Ojbect stamina with operator agains value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Stamina Value",
            description: "Compare the object's statmina against this value.",
            default: "0"
        }
    }, {
        name: "Is Stamina Percentage",
        category: "Health",
        xml: "Boolean IsStaminaPercentage(Guid, Operator, Single)",
        description: "Checks Ojbect stamina with operator agains percentage (0-100)",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Stamina Percentage",
            description: "Compare the object's stamina against this percentage.",
            default: "0"
        }
    },

    {
        name: "Is Item Count",
        category: "Items",
        xml: "Boolean IsItemCount(String, Operator, Int32)",
        description: "Checks the count of the named item in active party inventorys and the stash with operator against the value",
        param0: {
            name: "Item Name",
            description: "Name of the item",
            default: "ItemName"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Count",
            description: "Compare the item count against this value.",
            default: "0"
        }
    }, {
        name: "Is Item Equipped",
        category: "Items",
        xml: "Boolean IsItemEquipped(Guid, String)",
        description: "Checks if the Charackter has the named item equiped",
        param0: {
            name: "Object",
            description: "object",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Item Name",
            description: "Name of the item",
            default: "ItemName"
        }
    }, {
        name: "Is Item Equipped On Player",
        category: "Items",
        xml: "Boolean IsItemEquippedOnPlayer(String)",
        description: "Checks if any of the active party member has the named item equiped",
        param0: {
            name: "Item Name",
            description: "Name of the item",
            default: "ItemName"
        }
    }, {
        name: "Has Money",
        category: "Items",
        xml: "Boolean HasMoney(Operator, Int32)",
        description: "Checks the amount of money with the operator against the given value",
        param0: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param1: {
            name: "Amount",
            description: "Compare the player's money against this value.",
            default: "0"
        }
    }, {
        name: "Object Has Item Count",
        category: "Items",
        xml: "Boolean ObjectHasItemCount(Guid, String, Operator, Int32)",
        description: "Checks the count of the named item on this Object",
        param0: {
            name: "Object",
            description: "Object with an inventory.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Item Name",
            description: "Name of the item",
            default: "ItemName"
        },
        param2: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param3: {
            name: "Count",
            description: "Compare the item count against this value.",
            default: "0"
        }
    }, {
        name: "Is Weapon Type Equipped In Primary Slot",
        category: "Items",
        xml: "Boolean IsWeaponTypeEquippedInPrimarySlot(Guid, WeaponType)",
        description: "Checks if the Object has this weapon type equiped in the primary slot",
        param0: {
            name: "Object",
            description: "object",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Weapon Type",
            description: "Type of Weapon",
            default: "Arbalest"
        }
    },

    {
        name: "Is OCL In A State",
        category: "OCL",
        xml: "Boolean IsOCLInState(Guid, State)",
        description: "Checks if the Chest or Door is in the given State",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "State to test",
            description: "State",
            default: "Closed"
        }
    },

    {
        name: "Is Attribute Score Value",
        category: "RPG",
        xml: "Boolean IsAttributeScoreValue(Guid, AttributeScoreType, Operator, Int32)",
        description: "Checks if the Object matches the given Attribute value to the operator",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Attribute",
            description: "Attribute to test.",
            default: "Resolve"
        },
        param2: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param3: {
            name: "Value",
            description: "Compare the object's attribute score against this value.",
            default: "0"
        }
    }, {
        name: "Is Player Attribute Score Value",
        category: "RPG",
        xml: "Boolean IsPlayerAttributeScoreValue(AttributeScoreType, Operator, Int32)",
        description: "Checks if the Player matches the given Attribute value to the operator",
        param0: {
            name: "Attribute",
            description: "Attribute to test.",
            default: "Resolve"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Value",
            description: "Compare the object's attribute score against this value.",
            default: "0"
        }
    }, {
        name: "Is Slot Attribute Score Value",
        category: "RPG",
        xml: "Boolean IsSlotAttributeScoreValue(Int32, AttributeScoreType, Operator, Int32)",
        description: "Checks if the Character in the given Partyslot matches the given Attribute value to the operator",
        param0: {
            name: "Slot",
            description: "slot to test.",
            default: "0"
        },
        param1: {
            name: "Attribute",
            description: "Attribute to test.",
            default: "Resolve"
        },
        param2: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param3: {
            name: "Value",
            description: "Compare the object's attribute score against this value.",
            default: "0"
        }
    }, {
        name: "Is Defense Value",
        category: "RPG",
        xml: "Boolean IsDefenseValue(Guid, DefenseType, Operator, Int32)",
        description: "Test the objects defensetype value with the operator agains the value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Defense Type",
            description: "Defense to test.",
            default: "Deflect"
        },
        param2: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param3: {
            name: "Value",
            description: "Compare the object's defense against this value.",
            default: "0"
        }
    }, {
        name: "Is Player Defense Value",
        category: "RPG",
        xml: "Boolean IsPlayerDefenseValue(DefenseType, Operator, Int32)",
        description: "Test the players defensetype value with the operator agains the value",
        param0: {
            name: "Defense Type",
            description: "Defense to test.",
            default: "Deflect"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Value",
            description: "Compare the object's defense against this value.",
            default: "0"
        }
    }, {
        name: "Is Skill Value",
        category: "RPG",
        xml: "Boolean IsSkillValue(Guid, SkillType, Operator, Int32)",
        description: "Tests the skillvalue of the Object with the operator against the value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Skill Type",
            description: "Skill to test.",
            default: "Stealth"
        },
        param2: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param3: {
            name: "Value",
            description: "Compare the object's skill against this value.",
            default: "0"
        }
    }, {
        name: "Is Party Skill Value Count",
        category: "RPG",
        xml: "Boolean IsPartySkillValueCount(SkillType, Operator, Int32, Operator, Int32)",
        description: "Tests the given skill value of all Partymembers and counts the passes, then checks the count with the operator against the value",
        param0: {
            name: "Skill Type",
            description: "Skill to test.",
            default: "Stealth"
        },
        param1: {
            name: "Skill Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Skill Value",
            description: "Compare the object's skill against this value.",
            default: "0"
        },
        param3: {
            name: "Party Operator",
            description: "Compare the party count with this operator.",
            default: "EqualTo"
        },
        param4: {
            name: "Party Value",
            description: "Compare how many party members pass.",
            default: "0"
        }
    }, {
        name: "Is Player Skill Value",
        category: "RPG",
        xml: "Boolean IsPlayerSkillValue(SkillType, Operator, Int32)",
        description: "Tests the skillvalue of the Player with the operator against the value",
        param0: {
            name: "Skill Type",
            description: "Skill to test.",
            default: "Stealth"
        },
        param1: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param2: {
            name: "Value",
            description: "Compare the object's skill against this value.",
            default: "0"
        }
    }, {
        name: "Is Slot Skill Value",
        category: "RPG",
        xml: "Boolean IsSlotSkillValue(Int32, SkillType, Operator, Int32)",
        description: "Checks if the Character in the given Partyslot matches the given Skill value to the operator",
        param0: {
            name: "Slot",
            description: "slot to test.",
            default: "0"
        },
        param1: {
            name: "Skill Type",
            description: "Skill to test.",
            default: "Stealth"
        },
        param2: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param3: {
            name: "Value",
            description: "Compare the object's skill against this value.",
            default: "0"
        }
    }, {
        name: "Is Player Character Using S.I.",
        category: "RPG",
        xml: "Boolean IsPlayerCharacterUsingSI()",
        description: "Checks if the Player is in a scrited Int32eraction"
    }, {
        name: "Is Player Character Skill Check 0",
        category: "RPG",
        xml: "Boolean IsPlayerCharacterSkillCheckZero()",
        description: "Checks if the Player Character succeceds the script call of SetSkillCheckToken(…)"
    }, {
        name: "Is Class",
        category: "RPG",
        xml: "Boolean IsClass(Guid, Class)",
        description: "Checks the class of the Object agains value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Class",
            description: "Class to test.",
            default: "Fighter"
        }
    }, {
        name: "Is Player Class",
        category: "RPG",
        xml: "Boolean IsPlayerClass(Class)",
        description: "Checks the class of the Player against value",
        param0: {
            name: "Class",
            description: "Class to test.",
            default: "Fighter"
        }
    }, {
        name: "Is Race",
        category: "RPG",
        xml: "Boolean IsRace(Guid, Race)",
        description: "Checks the race of the Object against value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Race",
            description: "Race to test.",
            default: "Human"
        }
    }, {
        name: "Is Player Race",
        category: "RPG",
        xml: "Boolean IsPlayerRace(Race)",
        description: "Checks the race of the Player against value",
        param0: {
            name: "Race",
            description: "Race to test.",
            default: "Human"
        }
    }, {
        name: "Is Subrace",
        category: "RPG",
        xml: "Boolean IsSubrace(Guid, Subrace)",
        description: "Checks the subrace of the Object against value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Subrace",
            description: "Subrace to test.",
            default: "Meadow_Human"
        }
    }, {
        name: "Is Player Subrace",
        category: "RPG",
        xml: "Boolean IsPlayerSubrace(Subrace)",
        description: "Checks the subrace of the Playcer against value",
        param0: {
            name: "Subrace",
            description: "Subrace to test.",
            default: "Meadow_Human"
        }
    }, {
        name: "Is Gender",
        category: "RPG",
        xml: "Boolean IsGender(Guid, Gender)",
        description: "Checks the gender of the Object against value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Gender",
            description: "Gender to test.",
            default: "Male"
        }
    }, {
        name: "Is Player Gender",
        category: "RPG",
        xml: "Boolean IsPlayerGender(Gender)",
        description: "Checks the gender of the Player against value",
        param0: {
            name: "Gender",
            description: "Gender to test.",
            default: "Male"
        }
    }, {
        name: "Is Slot Gender",
        category: "RPG",
        xml: "Boolean IsSlotGender(Int32, Gender)",
        description: "Checks the character gender at the given slot against value",
        param0: {
            name: "Slot",
            description: "Slot to test",
            default: "0"
        },
        param1: {
            name: "Gender",
            description: "Gender to test.",
            default: "Male"
        }
    }, {
        name: "Has Talent or Ability",
        category: "RPG",
        xml: "Boolean HasTalentOrAbility(Guid, String)",
        description: "Checks if the Object posses the named Ability",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Ability Name",
            description: "Name of the ability",
            default: "AbilityName"
        }
    }, {
        name: "Is Deity",
        category: "RPG",
        xml: "Boolean IsDeity(Guid, Deity)",
        description: "Checks if the Object has this Deity value",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Deity",
            description: "Deity to test.",
            default: "Berath"
        }
    }, {
        name: "Is Paladin Order",
        category: "RPG",
        xml: "Boolean IsPaladinOrder(Guid, PaladinOrder)",
        description: "Checks if the Object has the named Paladin Order",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Paladin Order",
            description: "Paladin order to test.",
            default: "BleakWalkers"
        }
    }, {
        name: "Is Culture",
        category: "RPG",
        xml: "Boolean IsCulture(Guid, Culture)",
        description: "Checks if the Object has the named culture",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Culture",
            description: "Culture to test.",
            default: "Aedyr"
        }
    }, {
        name: "Is Player Culture",
        category: "RPG",
        xml: "Boolean IsPlayerCulture(Culture)",
        description: "Checks if the Player has the named culture",
        param0: {
            name: "Culture",
            description: "Culture to test.",
            default: "Aedyr"
        }
    }, {
        name: "Is Background",
        category: "RPG",
        xml: "Boolean IsBackground(Guid, Background)",
        description: "Checks if the Object has the named background",
        param0: {
            name: "Object",
            description: "Object to test.",
            default: "",
            type: "Guid"
        },
        param1: {
            name: "Background",
            description: "Background to test.",
            default: "0"
        }
    }, {
        name: "Is Player Background",
        category: "RPG",
        xml: "Boolean IsPlayerBackground(Background)",
        description: "Checks if the Player has the named background",
        param0: {
            name: "Background",
            description: "Background to test.",
            default: "0"
        }
    },

    {
        name: "Current Map Is Stronghold",
        category: "Stronghold",
        xml: "Boolean CurrentMapIsStronghold()",
        description: "Checks if on the Strongholdmap"
    }, {
        name: "Can Add Prisoner",
        category: "Stronghold",
        xml: "Boolean CanAddPrisoner()",
        description: "Checks if Prison is build"
    }, {
        name: "Stronghold Has Prisoner",
        category: "Stronghold",
        xml: "Boolean StrongholdHasPrisoner(Guid)",
        description: "Checks if the Object is Prisoner in the Stronghold",
        param0: {
            name: "Object",
            description: "Prisoner object to check against",
            default: "",
            type: "Guid"
        }
    }, {
        name: "Stronghold Has Prisoner",
        category: "Stronghold",
        xml: "Boolean StrongholdHasPrisoner(String)",
        description: "Checks if the Person with this name is in the Prison",
        param0: {
            name: "Prisoner Name",
            description: "The name of the prisoner",
            default: "PrisonerName"
        }
    }, {
        name: "StrongholdHasUpgrade",
        category: "Stronghold",
        xml: "Boolean StrongholdHasUpgrade(Type)",
        description: "Checks if the Stronghold upgrade is build",
        param0: {
            name: "Upgrade Type",
            description: "Upgrade to check.",
            default: "None"
        }
    }, {
        name: "StrongholdIsBuildingUpgrade",
        category: "Stronghold",
        xml: "Boolean StrongholdIsBuildingUpgrade(Type)",
        description: "Checks if the Stronghold upgrade is in the works",
        param0: {
            name: "Upgrade Type",
            description: "Upgrade to check.",
            default: "None"
        }
    }, {
        name: "Stronghold Is Companion available",
        category: "Stronghold",
        xml: "Boolean StrongholdIsCompanionAvaliable(Guid)",
        description: "Checks if the Object/Companion is in the Stronghold",
        param0: {
            name: "Object",
            description: "Companion object to check against",
            default: "",
            type: "Guid"
        }
    }, {
        name: "Stronghold Is Security Value",
        category: "Stronghold",
        xml: "Boolean StrongholdIsSecurityValue(Operator, Int32)",
        description: "Checks the Stronghold Security Value with operator against value",
        param0: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param1: {
            name: "Value",
            description: "Compare the stronghold's Security score against this value.",
            default: "0"
        }
    }, {
        name: "Stronghold Is Prestige Value",
        category: "Stronghold",
        xml: "Boolean StrongholdIsPrestigeValue(Operator, Int32)",
        description: "Checks the Stronghold Prestige Value with operator against value",
        param0: {
            name: "Operator",
            description: "Comparison operator.",
            default: "EqualTo"
        },
        param1: {
            name: "Value",
            description: "Compare the stronghold's Prestige score against this value.",
            default: "0"
        }
    }
];
