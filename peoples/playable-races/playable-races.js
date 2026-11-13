import { customRacesByFaction, customClassesByRace, raceBaseData } from '../../db/custom/races.js';
import { newFactions, FACTION_DESCRIPTIONS } from '../../db/custom/factions.js';

const FACTIONS_TO_SHOW = [
    newFactions.ALLIANCE,
    newFactions.HORDE,
    newFactions.FORSAKEN,
    newFactions.NIGHT_ELVES,
    newFactions.ILLIDARI,
    newFactions.NEUTRAL,
];

const RACE_DISPLAY_NAMES = {
    darkfallen: 'Undead (Darkfallen)',
};

// Race/class combo lore - keyed as "raceId:ClassName"
const RACE_CLASS_DESCRIPTIONS = {
    'human:Mage': "The Kirin Tor of Dalaran are humanity's oldest and most prestigious institution of arcane learning. Human mages are respected across Azeroth for their disciplined, scholarly approach to magic - centuries of codified study setting them apart from the self-taught sorcerers of other cultures. Though Archimonde's assault on Dalaran scattered the order to the winds, the mages of the Alliance remain vital to the war effort, wielding fire, frost, and raw arcane force in service of human ambition.",
    'human:Paladin': "The Order of the Silver Hand was founded by Archbishop Alonsus Faol during the Second War, built upon the Clerics of Northshire who had carried the Holy Light into combat since the First War. It was human knights who first took the Silver Hand's oath, merging martial discipline with priestly faith into something new. No class is more closely bound to human identity than the paladin, their codes of honor and tradition of standing against evil flowing from the same ideals that built Stormwind. Though Arthas Menethil shattered the Silver Hand at Stratholme, the surviving paladins of the Alliance carry the Light still.",
    'human:Priest': "The Church of the Holy Light has stood at the heart of human civilization since the First War, maintaining hospitals, temples, and sanctuaries throughout Alliance territory even in the darkest of times. Its priests serve not only as healers but as counselors, moral authorities, and spiritual anchors for communities shaped by generations of war. The Light offers genuine comfort to the living and is genuinely lethal to the undead - a dual nature that has made human priests as valued on the battlefield as in the abbey. Their healers are among the most numerous and reliable in the Alliance.",
    'human:Rogue': "Human society has always harbored those who operate in the shadows of its ambitions. SI:7, Stormwind's intelligence agency, gives the rogue's trade a measure of institutional respectability - but where the Crown's agents go, freelance cutpurses, assassins, and spies are never far behind. Humans adapt to the demands of city life, where politics and sharp blades often matter more than open valor. Whether serving the Crown or serving themselves, human rogues navigate the world between law and necessity with practiced ease.",
    'human:Warrior': "The human soldier is the backbone of the Alliance - disciplined, trained, and battle-hardened through generations of war against the Horde, the Scourge, and the Legion. From the footmen who held the gates of Lordaeron to the veterans who rebuilt Stormwind from rubble, warriors represent the enduring will of humanity. No class is more central to the human story than those who take up sword and shield and meet the world's evils at the front line.",
    'human:Marksman': "Marksmanship finds a natural home among the organized armies of the Alliance, where holding a line and picking off threats at range has saved countless lives since the First War. Crossbowmen served in Stormwind's ranks from the very beginning - steady and dependable across every major campaign. Human marksmen have shaped the outcome of many battles, their patience and precision turning the tide before swords are ever drawn.",
    'human:Warlock': "Warlocks are forbidden by the Church of the Holy Light and hunted by SI:7 - and yet they endure. The temptation of power is a human failing, and demonic magic offers power in terrible abundance. Most human warlocks practice in secret, telling themselves their arts are a necessary weapon against the Legion. A few serve the Crown directly as demonologists, their talents too useful to waste - though they are kept under strict watch. Trust is extended carefully, and withdrawn the moment it is abused.",

    'dwarf:Hunter': "Dwarves have hunted the peaks and valleys of Khaz Modan for as long as their clans have stood. The mountains demand patience, endurance, and an intimate knowledge of the creatures that share them - qualities that come naturally to a people shaped by stone and cold. Dwarven hunters are expert trackers and trappers, their understanding of terrain and animal behavior honed across generations of working the highland passes.",
    'dwarf:Marksman': "The dwarves have long had an affinity for the rifle - a weapon they did not merely adopt but helped perfect, forging and refining it in Ironforge's workshops across generations. Dwarven marksmanship is methodical and precise, born from a culture that values craftsmanship in all its forms. Where a human marksman might rely on training alone, a dwarf often designed and built the weapon they wield, taking equal pride in the tool and the shot. Their tradition of sharpshooting stretches back to the defense of Ironforge during the Second War.",
    'dwarf:Priest': "Dwarven priests do not worship gods or divine abstractions but the earth itself. Their spiritual tradition is rooted in ancestral reverence and a deep awareness of their Titan-forged origins, practiced by earth-speakers whose rites honor the stone, the deep places, and the memory of what dwarves were before they became what they are now. It is an intimate, grounded faith, and dwarves who follow it tend to be as immovable in spirit as the rock they venerate.",
    'dwarf:Rogue': "Where there is gold to be counted and contracts to be honored, there are those who work the angles. Dwarven rogues operate within a culture that respects a fair deal and a well-placed secret - the thieves' guilds of Ironforge are quieter than Stormwind's, but no less effective. Many work as scouts and spies for the Explorer's League or the Mountaineers, where their knowledge of tunnels and hidden paths gives them a considerable edge.",
    'dwarf:Warrior': "The dwarven warrior tradition is ancient and unbroken. For thousands of years the clans of Khaz Modan defended their mountain holds against troggs, Iron Dwarves, and the Horde - and each conflict only forged them harder. Dwarven warriors are among the most tenacious fighters in the Alliance, their stubborn endurance in battle a match for their stubbornness in everything else. They do not yield ground easily, and they do not forgive those who take it from them.",
    'dwarf:Mage': "Dwarven mages practice a runic mysticism entirely their own - reading arcane secrets from stone, titan-forged inscriptions, and the deep rock of Khaz Modan. Their order believes this knowledge was encoded into the earth deliberately, and they work closely with the Explorers' League to unearth and decipher it. The magic they channel flows through runic inscription rather than the theoretical frameworks of Dalaran. They have also grown fiercely covetous of the runemaster traditions kept by the tauren, who guard that earth-knowledge tightly and have no interest in sharing it.",

    'gnome:Mage': "Gnomes approach arcane magic the same way they approach engineering - as a system of principles to be understood, dissected, and improved upon. The gnomish tradition of arcane study is not as ancient as Dalaran's, but it is arguably more innovative; gnomish mages have contributed more than a few unsettling breakthroughs to the Kirin Tor's body of knowledge. Their spells tend to be precise, efficient, and occasionally over-engineered, and they have a disconcerting habit of annotating their own incantations.",
    'gnome:Rogue': "Gnomes are often underestimated, which is precisely what a rogue requires. Small, quick, and mechanically inventive, gnomish rogues carry gadgets where others carry knives, and their approach to stealth owes as much to engineering as it does to traditional tradecraft. Many served as spies and saboteurs during the fall of Gnomeregan, operating behind lines where a small body and a quick mind mattered more than brute force.",
    'gnome:Tinker': "Gnomeregan was the jewel of gnomish civilization - an entire city of mechanical ingenuity nested beneath the mountains - and even its tragic fall could not silence the inventive drive of the gnomish people. Where goblin engineering favors volatility and profit, gnomish engineering favors precision and curiousity - a pursuit of understanding through invention, driven by fascination with how things work rather than what they can destroy. The results are not always safe, but they are never boring.",
    'gnome:Warlock': "Gnomish warlocks are an anomaly among their kind - a curiosity that other gnomes regard with equal parts fascination and alarm. Where gnomish curiosity most often expresses itself through machines and controlled experiments, the warlock pursues power through bargains with entities far less predictable than any engine. A gnomish warlock typically approaches demonic magic as an intellectual challenge, which does not make them less dangerous - it may make them more so.",
    'gnome:Warrior': "Not every gnome solves problems with gears and circuitry. Some simply hit things until the problem stops. Gnomish warriors tend to compensate for their stature with ferocity and a refusal to be underestimated, traits shared by most gnomes regardless of profession. They are most often found in units where their combination of mechanical knowledge and physical toughness confounds taller soldiers who had already written them off.",

    'high_elf:Hunter': "The high elves of Quel'Thalas have always had a deep bond with the forests of their homeland, and the ranger tradition is among the oldest in their culture. High elf hunters trace their craft to the ancient Farstriders - the ranging scouts of Quel'Thalas - whose precision with the bow and mastery of woodland survival made them the foremost rangers in the Eastern Kingdoms. Though Quel'Thalas fell to the Scourge, the Farstrider tradition lives on among the exiled high elves who now fight beneath the Alliance banner.",
    'high_elf:Mage': "The high elves are among the most gifted practitioners of arcane magic in the world, their tradition of spellcraft stretching back over ten thousand years to the fall of the kaldorei empire. Quel'Thalas was built on a wellspring of arcane power - the Sunwell - and for millennia the high elves refined and mastered the arcane arts with an elegance their human students could only admire. The destruction of the Sunwell has left many high elf mages diminished, but not broken. Those who remain fight on, drawing on discipline and deep knowledge where raw power once sufficed.",
    'high_elf:Marksman': "The Farstriders of Quel'Thalas are defined above all else by their archers - marksmen whose mastery of the longbow was counted among the finest in the Eastern Kingdoms, their arrows loosed with a precision honed across ten thousand years of tradition. For the high elves, marksmanship is a cultural legacy, inseparable from the identity of those who patrolled and defended Quel'Thalas for millennia. Exiled and diminished, the high elves who carried that tradition south brought the same exactness and discipline to the Alliance's wars, far from the homeland that first forged it.",
    'high_elf:Priest': "The high elves maintained their own priestly tradition, centered on the Light and on the arcane-infused spiritual practices unique to Quel'Thalas. Their priests served as healers, advisors, and keepers of elven memory, their connection to the Light tempered by centuries of arcane influence. The fall of the Sunwell and the destruction of Quel'Thalas shook the faith of many high elf priests profoundly - some abandoned the Light entirely - but those who held on emerged with a grief-hardened conviction that has made them formidable.",
    'high_elf:Rogue': "High elf culture values subtlety, and its rogues reflect that. Where human rogues often serve criminal guilds or intelligence agencies, high elf rogues tend to operate as independent agents - former Farstriders or intelligence operatives displaced from their former roles by the fall of Quel'Thalas. They are typically cold, efficient, and disinclined to sentiment; survivors of a civilization's collapse tend to shed what does not serve them.",
    'high_elf:Warrior': "Though the high elves are best known for their arcane prowess, they have maintained a martial tradition for as long as they have had enemies - which is to say, since the Troll Wars of ancient memory. High elf warriors fight with a measured, technically precise style that reflects their culture's emphasis on form and mastery. Many served in Quel'Thalas's standing army before the Scourge destroyed it, and brought their discipline south when the survivors scattered. Among the Alliance they are considered outstanding soldiers, if somewhat difficult to work with.",
    'high_elf:Paladin': "The Holy Light and its Order of the Silver Hand did not originate among the high elves, and the paladin's path was not always open to them. A small number of high elves have been accepted into the Order since the Second War - enough to demonstrate that elven devotion to the Light is genuine, if different in character from the human tradition. High elf paladins tend to be quietly fervent, their faith carrying the weight of everything they have lost. They are difficult to break, and slow to forgive.",

    'orc:Hunter': "The orcish hunter tradition is inseparable from the warrior culture that defines orcish civilization - hunting is how young orcs learn patience, tracking, and the application of lethal force before they are old enough to march with the clan. On Draenor, the great creatures of the Blade's Edge Mountains and Nagrand were both prey and teachers, their instincts and strength demanding respect. The orcs who kept to their ancestral ways through the demon curse and the wars on Azeroth found that the old skills transferred without loss.",
    'orc:Rogue': "Honor is the orc code, but pragmatism is the orc survival. Orcish rogues occupy an uncomfortable position in Horde culture - the craftiness they represent is valued in war, but the skulking it requires sits uneasily alongside orcish ideals of direct confrontation. Most orcish rogues frame their practice as a form of tactical superiority: not hiding from battle, but choosing the precise moment and angle of engagement. The distinction satisfies some, and none of the others say so to their face.",
    'orc:Shaman': "The shaman tradition is the spiritual foundation of orcish civilization, predating the demon pact that nearly destroyed it. Before Gul'dan corrupted the warlocks and subjugated the elements, orc shamans were the voices of earth, sky, fire, and water - advisors and spiritual leaders whose wisdom guided the clans through Draenor's harsh cycles. Thrall's revival of the old ways restored something fundamental to orcish identity, and the shaman tradition now stands as the Horde's most direct link to what the orcs were before the Burning Legion found them.",
    'orc:Warlock': "The warlock is the wound in orcish history that has not fully healed. Gul'dan's corruption of the shaman tradition into demonic practice cost the orcs their spiritual connection to the elements, their freedom, and very nearly their identity as a people. That some orcs still walk the warlock path in the Horde's ranks is a source of ongoing tension - for some, it is pragmatic power; for others, it is a reminder of the worst chapter their people have ever lived. Both views are argued loudly, and neither has fully won.",
    'orc:Warrior': "To be an orc warrior is to fulfill the purpose for which orcish civilization exists in its own understanding of itself. Every aspect of orcish culture - the clan structure, the honor codes, the coming-of-age rites - flows toward the production of warriors capable of holding the line and driving the enemy back. Orcish warriors are not merely soldiers; they are the living expression of their people's will to survive and dominate in a world that has shown them nothing but hostility. Even in peace, the warrior is what an orc aspires to be.",

    'tauren:Hunter': "The tauren have hunted the great plains of Mulgore and the Barrens since before the kodo first arrived, and their hunters are deeply versed in the patterns of the land and its creatures. Tauren hunting is as much a spiritual practice as a practical one - the hunter asks permission of the spirit world before taking a life, and thanks the creature's spirit after. This reverence for the natural cycle makes tauren hunters patient observers and deliberate killers, guided by respect as much as necessity.",
    'tauren:Priest': "Spiritwalkers are the eldest class of spiritual practitioner among the tauren - reclusive figures who walk between worlds, speaking with the spirits of the earth, sky, and the honored dead in a tradition that draws on knowledge no other race fully shares. Their worldview sees no boundary between the living and the departed, ancestors and elemental forces woven together into a single unbroken continuity. The white tauren are held in near reverence by their people, regarded as omens of a coming age, wandering the land in search of kindred spirits and the truths the spirit world has yet to speak aloud.",
    'tauren:Runemaster': "The Runemaster tradition among the tauren is ancient and largely internal, passed from elder to chosen apprentice in an unbroken line that predates their contact with the Horde. The runes they work are not the arcane glyphs of mages - they are marks of power pressed into earth and bone, reflecting the deep connection between the tauren and the elemental forces that shaped Mulgore. A tauren Runemaster is part warrior, part sage, and entirely formidable; their art is not flashy, but its effects on the battlefield are difficult to ignore.",
    'tauren:Warrior': "Tauren warriors are among the most physically imposing fighters on Azeroth, and they know it. But raw strength alone does not define the tauren fighter - their tradition of warfare is shaped by honor, by the protection of tribe and land, and by a measured aggression that makes them as effective on defense as on offense. The tauren do not go looking for wars, but when war comes to Mulgore, it finds them ready.",
    'tauren:Shaman': "Though shamanism as the tauren know it was introduced by the orcs when the New Horde first formed, it took root immediately - the elemental practices found a people already spiritually attuned to the earth and sky, and what was offered as knowledge was received as recognition. Tauren shamans commune with the elements across the great plains of Mulgore, their bond with earth and storm deep and unhurried, having applied orcish teaching to a spiritual groundwork the orcs themselves could not claim.",

    'troll:Hunter': "The trolls of the Darkspear have hunted since before they could name what they were doing - across the islands of their lost homeland and through the tangled wilds of Stranglethorn, necessity made hunters of them long before any formal tradition took shape. Troll hunters carry that history: patient, opportunistic, and deeply attuned to the behavior of prey. They make use of every terrain advantage available to them, and they do not fight fair when fighting fair is unnecessary.",
    'troll:Priest': "The troll relationship with priesthood is inseparable from their relationship with the loa - the wild spirit-beings that suffuse troll religion. Troll priests pray to the loa, their blessings earned rather than freely given. The healers and prophets who speak for the loa wield considerable authority in troll society, their visions and pronouncements shaping the fates of entire clans. In moments of deep favor, the loa may choose to channel through their priest directly - lending capabilities that are no longer entirely the priest's own, and withdrawing them just as suddenly.",
    'troll:Rogue': "The Darkspear lived for generations as raiders and survivors - cultures that reward exactly the skills a rogue applies. Troll rogues operate with a natural economy of effort, cutting corners and exploiting weaknesses without apology, because their history has made anything else seem like willful waste. They are lightly regarded by some in the Horde, who associate their methods with cowardice, and deeply respected by the rest, who have seen the results.",
    'troll:Warrior': "Troll warriors carry a deep cultural memory of what it means to fight for survival with nothing to spare. The Darkspear have been pushed from homeland after homeland and the warriors who came through those trials are not interested in ceremony. They fight to end the fight, quickly and completely, and they have no patience for enemies who do not understand when they have already lost.",
    'troll:Witch Doctor': "The Witch Doctor is perhaps the most distinctly troll of any class available to them. Their rites, their fetishes, their dark bargains with the loa - all of it flows directly from the oldest and most closely guarded traditions of troll culture. In battle the witch doctor does not stand at the front; they stand slightly behind it, working wards into the earth and calling on forces that do not operate on the same schedule as steel. Every major troll society has its witch doctors, and no troll army goes to war without them.",
    'troll:Warlock': "Troll warlocks draw their power not from demonic pacts but from curses, hexes, and dark bargains with forces that answer only to those who know the right words and the right price. Their craft is older than the Legion's corruption and more personal - a tradition of afflicting enemies and extracting power from suffering that has been part of troll society since long before the Darkspear found their way to the Horde. The loa do not sanction it, but neither do they intervene, and that ambiguity is all the license a troll warlock needs.",

    'ogre:Shaman': "The orcish shaman tradition spread to the ogres during their long coexistence on Draenor, where the two species were neighbors, rivals, and occasionally allies across centuries of conflict. Among the Stonemaul, shamanism took root as the clan's connection to the Horde deepened - rawer and less refined than orcish practice, the elements that answer a shaman's call tend to be elemental equivalents of the ogres themselves: blunt, overwhelming, and not given to subtlety. Still, there are Stonemaul shamans who have earned genuine respect, their connection to the earth and storm as authentic as any orc's.",
    'ogre:Warlock': "Ogres were among the first non-orcs exposed to dark power during Gul'dan's corruption of the clans, and the Ogre Magi that resulted were among the most feared spellcasters of the Second War. The two-headed ogres showed a particular aptitude for channeling raw foul energy, their dual minds allowing them to sustain spells that would overwhelm a single-brained caster. Ogre warlocks bring that brute-force tradition to the Horde's ranks - their command of fel magic is genuine and dangerous, even if their approach lacks the precision of their orcish counterparts.",
    'ogre:Warrior': "The ogre is, at its most fundamental, a force of nature in combat - massive, durable, and possessed of a straightforward attitude toward conflict that reduces most tactical thinking to a single question: how hard, and with what. Ogre warriors are valued by the Horde for their raw physical presence, their ability to shrug off wounds that would incapacitate smaller races, and their disconcerting tendency to enjoy battle more than it makes their commanders comfortable.",
    'ogre:Witch Doctor': "The ogre relationship with witch doctor practices is indirect but deep - their tradition of warpainting, wards, and ritual preparation for battle draws from the same spiritual substrates as the more formally defined witch doctor tradition of the trolls. Ogre witch doctors are coarser in their methods and louder in their rites, but the wards they set and the curses they throw carry the same essential weight. Among ogre clans, the witch doctor occupies a position of significant social power.",

    'undead:Mage': "The undead mages of the Forsaken carry their arcane knowledge like everything else they carry - stripped of warmth, but undimmed. Many were trained at Dalaran or in human academies before the Scourge took them; death interrupted their scholarship, but it did not erase it. Forsaken mages operate with a detachment that their living colleagues find unsettling: freed from fatigue, hunger, and the fear of physical pain, they pursue their arcane studies with a single-mindedness that was never quite possible in life.",
    'undead:Marksman': "The Forsaken are a people defined by loss and by the cold determination to survive what killed them. Among those who kept their ranged skills into undeath, the marksman tradition is notably efficient - death has a way of distilling craft to its essentials, removing sentiment from the process of killing without removing the skill. Forsaken marksmen serve the Banshee Queen's armies mostly as archers and sharpshooters, their patience without fatigue giving them an advantage in long engagements that no living marksman can quite match.",
    'undead:Priest': "Forsaken priests do not walk the path of the Holy Light as human clergy do. Their doctrine is the Cult of the Forgotten Shadow - a tradition that acknowledges the Light but finds truth and power in the darkness that must balance it. Where others draw comfort from the Light's warmth, the Forsaken embrace what lies in opposition: shadow, affliction, and the cold certainty that darkness is not the enemy of order but its necessary companion. They wield shadow and suffering with a conviction that comes only from those who have nothing left to fear.",
    'undead:Rogue': "Death has a way of simplifying things, and for Forsaken rogues, it has simplified the question of what they are willing to do. Unfettered by the living concerns of reputation, family, or personal safety, the Forsaken rogue approaches their work with a pragmatic clarity that the living rarely manage. They serve Sylvanas's intelligence apparatus, the Royal Apothecary Society, and their own purposes in roughly equal measure - often all at once.",
    'undead:Warlock': "The Forsaken relationship with the demonic is complicated by the fact that it was, in part, the demonic that killed and enslaved them. Forsaken warlocks are not rare, but they are guarded about their practice - the line between commanding demons and being commanded by them is one that Sylvanas watches carefully. Those who walk it successfully are valued as some of the most dangerous combatants in the Forsaken ranks, their command of fel magic augmenting the plague and shadow arts that the Banshee Queen prefers.",
    'undead:Warrior': "The Forsaken warrior fights with all the skill they possessed in life and none of the hesitation that life imposes. They do not bleed to weakness, do not tire under sustained assault, and do not flinch at wounds that would shatter a living fighter's will. What the Forsaken warrior lacks in the camaraderie and passion that drives a human soldier forward, they replace with the cold arithmetic of a body that simply refuses to stop until there is nothing left to animate.",
    'undead:Death Knight': "The Death Knight is the most narrowly held path available to the Forsaken - and the most personal. Every Forsaken Death Knight was once a soldier claimed by the Lich King, their body remade into an instrument of his will and turned against everything they had served. The breaking of that bond left them not free exactly, but themselves again - carrying weapons and power forged in the Lich King's service, and the will to use them for their own ends. Among the Forsaken they are feared and respected in equal measure, their command of rime and plague a reminder of what was done to all of them.",

    'darkfallen:Mage': "The Darkfallen carry the arcane heritage of Quel'Thalas into undeath - a lineage of magical tradition stretching back millennia, now wielded by hands that no longer feel the warmth of the Sunwell they once drew from. Darkfallen mages operate on discipline and memory, their spells as precise as in life, their hunger for the arcane transmuted into something colder and more deliberate. They are not the mages they once were.",
    'darkfallen:Marksman': "The Farstrider tradition of Quel'Thalas produced some of the finest rangers in Azeroth, and death did not diminish their skill. The Darkfallen who retain their marksmanship in undeath carry that heritage - precision without hesitation, patience without fatigue, and a hatred of the Scourge that has only sharpened since the fall of their homeland. They serve as the Forsaken's most effective scouts, their elven senses intact and their motivation deeply personal.",
    'darkfallen:Priest': "The Darkfallen who walk the priestly path do not follow the Holy Light as their living kin once did. In undeath, the doctrine of the Forgotten Shadow finds fertile ground - a teaching that holds darkness as necessary and powerful, not as corruption to be overcome but as truth to be wielded. Darkfallen priests bring to that doctrine the elven precision and depth of their former religious tradition, becoming some of the most formidable shadow practitioners in the Forsaken's ranks.",
    'darkfallen:Rogue': "The elves of Quel'Thalas maintained their own intelligence traditions - quiet, patient, and ruthless in ways their outward elegance rarely suggested. Darkfallen rogues carry those traditions intact, their elven grace and trained precision undiminished by undeath. They serve the Forsaken's purposes with the cold professionalism of agents whose personal loyalties died with their homeland and whose hatred of the Scourge has given them a new sense of purpose.",
    'darkfallen:Warlock': "Darkfallen warlocks represent a dark evolution of the blood elf magical tradition. The elves of Quel'Thalas were already experimenting with demonic energy in the waning years of the Sunwell; death removed the last inhibitions against it. Darkfallen warlocks command fel power with elven precision and undead endurance, a combination that makes them formidable. Sylvanas values them cautiously, aware that those who have already made one forbidden bargain are not unlikely to make another.",
    'darkfallen:Warrior': "The high elves of Quel'Thalas maintained a standing army for thousands of years, and the warriors who rose through its ranks carried themselves with a discipline that death has not fully extinguished. Darkfallen warriors fight with the clipped efficiency of soldiers trained in a formal military tradition - no wasted movement, no wasted time. What they may lack in the passionate fury of an orc warrior or the cold stubbornness of a Forsaken footsoldier, they replace with technique cultivated over a far longer lifespan.",

    'night_elf:Hunter': "The night elf sentinel tradition is among the oldest on Azeroth, its roots in the ten thousand years of vigil the kaldorei kept over the world after the Sundering. The hunter's path is a solitary one - less bound by the formal structures of sentinel or druid than by an individual connection to the ancient forests of Ashenvale and Felwood, tracking threats through them with patience measured in millennia. The night elf hunter carries Cenarius's reverence for the natural world alongside a quiet willingness to protect it by whatever means the forest demands.",
    'night_elf:Druid': "The night elves who walk the druid's path follow in the direct footsteps of Cenarius, the demigod who taught the ancient kaldorei the ways of nature magic. For ten thousand years, male night elves have been the keepers of the druidic tradition - sleeping in the Emerald Dream in long cycles while the Sentinels stand watch above. The Burning Legion's invasion ended that age of separation, calling the druids from their sleep to defend the world they had tended in silence for so long.",
    'night_elf:Warrior': "The Sentinels of Darnassus are the night elf military order, and they are composed almost entirely of women. For ten thousand years, while the male druids slept in the Emerald Dream, the Sentinels stood watch over Kalimdor - guarding the forests, patrolling the borders, and repelling incursions with a discipline born from unbroken millennia of service. A night elf Sentinel warrior is not merely a soldier; she is the living continuity of a tradition that has defended the natural world without pause since before most mortal civilizations began.",
    'night_elf:Marksman': "The Sentinels have always maintained an archery tradition - the longbow is as much a part of the sentinel's identity as her glaive - and the marksman's craft of patient, precise ranged engagement fits naturally within it. Female night elf marksmen are often former Sentinels who specialized in ranged engagement over millennia of forest patrol, refining what began as a military skill into the practiced art of striking at exact range and angle, unseen and uncontested.",
    'night_elf:Rogue': "The night elves' natural shadowmeld was always a precursor to the rogue's trade, and the Watchers have long maintained a specialist corps of assassins and infiltrators who operate beyond the forest's edge. Among the Watchers, those tasked with hunting fugitives and escaped threats across unfamiliar territory are as much rogues as they are soldiers - shadow, poison, and the precise strike delivered before the target knows they are being hunted. Thousands of years of nocturnal patrol have made the dark their home.",
    'night_elf:Priest': "The Sisterhood of Elune is among the oldest organized priesthoods on Azeroth, their devotion to the Moon Goddess Elune predating the First War by millennia. During the long age when male druids slept in the Dream, it was the priestesses of Elune who guided night elf society, led their military, and kept the celestial calendar by which the kaldorei measured time. These priestesses are not simply clerics - they are the custodians of a civilization's most fundamental spiritual tradition, their connection to Elune carrying a depth that no other priestly order can fully claim.",

    'furbolg:Hunter': "The furbolgs have lived in the ancient forests of Kalimdor since before the kaldorei built their first temple. Hunters by nature and necessity, they have tracked and fed from the great groves for generations uncounted, their relationship with the forest's creatures shaped by reverence rather than exploitation. Among the Timbermaw - the tribe that resisted the corruption that claimed so many of their kin - hunters carry a primal directness in their craft - instinctiveness, attunement, and raw effectiveness.",
    'furbolg:Shaman': "The furbolg shamanic tradition is deep and largely unpublicized, its practices transmitted through elder memory rather than formal teaching. These shamans are listeners first - attuned to the spirits of the forest, the voices of their ancestors, and the moods of the land itself, without ceremony or theological mediation between themselves and what they hear. Among the Timbermaw, they are also the keepers of what the tribe managed to preserve through the corruption that took so many others.",
    'furbolg:Warrior': "Among the Timbermaw tribe, warriors are not soldiers in any organized military sense - no standing armies, no formal ranks, no chain of command. What they have is a tradition of physical dominance and protective aggression that predates any such structure. The Timbermaw are no exception, their warriors guarding the hold and its passes with the same unornamented ferocity - fighting for their groves, their elders, and the forest itself, as they always have.",

    'blood_elf:Hunter': "The blood elf hunter tradition descends directly from the Farstriders - the ranger elite of Quel'Thalas whose skill with the bow made them the most respected ranging corps in the Eastern Kingdoms. After the Scourge's devastation of their homeland, many Farstriders turned to Illidan's service in Outland, their purpose reoriented from protecting a homeland that no longer existed to vengeance against the enemy that destroyed it. Blood elf hunters carry that history: disciplined, precise, and driven by a grief that has never resolved into anything softer.",
    'blood_elf:Mage': "Blood elves are the direct magical inheritors of Quel'Thalas's arcane tradition, and their hunger for the arcane is as much biological as it is cultural. Where high elf mages draw on discipline and deep knowledge, blood elves draw on need - their addiction to the arcane has been transformed from weakness into drive, their craving for magical energy making them relentless students of the arcane arts. In Illidan's service, blood elf mages found sources of arcane power that their exile could never have provided.",
    'blood_elf:Marksman': "The Farstrider tradition of precise, long-range engagement has survived every catastrophe Quel'Thalas has endured. Blood elf marksmen carry that heritage with them to Outland - the same discipline, the same methodical patience, the same commitment to ending threats at range before they become problems at close quarters. If anything, the fall of their homeland and the loss of so many of their kin has sharpened their accuracy. Grief and rage, properly directed, make for extraordinary aim.",
    'blood_elf:Priest': "Blood elf priests no longer draw their power from personal faith in the Holy Light - the fall of Quel'Thalas and the loss of the Sunwell extinguished that. Instead, they siphon divine energy from M'uru, the naaru held captive beneath Silvermoon, channeling the power of a cosmic divine entity they have imprisoned rather than revered. They wield the Light not as worshippers but as drain-masters, their holy magic as potent as ever but untethered from belief. Whether the Light itself considers this arrangement acceptable is a question they have chosen not to ask.",
    'blood_elf:Rogue': "Blood elf rogues bring the elven aristocratic tradition of intrigue and controlled information to a class that usually relies on shadows and blunt pragmatism. Quel'Thalas maintained extensive spy networks and political intelligence services even in its height, and many of the blood elves who became Illidan's agents in Outland had backgrounds in those institutions. Blood elf rogues tend toward precision and elegance in their methods - less the blunt instrument of the Forsaken operative, more the calculated blade of someone who knows exactly what they are cutting.",
    'blood_elf:Warlock': "The blood elf warlock is the endpoint of a journey that began with arcane addiction and found no comfortable resolution. The Scourge's devastation of Quel'Thalas stripped away whatever restraint had kept some blood elves from the demonic - when everything else was taken, the line between acceptable and unacceptable sources of power became considerably easier to cross. Blood elf warlocks are not naive about the bargain they have made; they are simply committed to it. Among Illidan's forces they operate without the scrutiny that would follow them elsewhere, a freedom they use without sentimentality.",
    'blood_elf:Warrior': "Blood elf warriors carry the formal military tradition of Quel'Thalas - a culture that maintained a standing army for millennia and fought the Troll Wars to a decisive conclusion in an age most other races have long forgotten. They fight with controlled technique and measured aggression, their discipline refined by centuries of martial tradition and hardened by the devastation of everything they were trained to protect. Blood elf warriors do not fight with wild rage or cold stubbornness, but with the deliberate precision of soldiers who know exactly what was lost and what must be avenged.",
    'blood_elf:Paladin': "Blood elf paladins do not carry the faith that defines the Silver Hand. The Light was taken from them when the Scourge destroyed the Sunwell, and they did not wait for it to return. Instead, they siphon their holy power directly from M'uru, a naaru held captive beneath Silvermoon, forcing a divine being to fuel their crusade whether it consents or not. They channel genuine Light magic - real, potent, and formidable - but they do so as jailers of a god. Whether this makes them paladins in any true sense is a distinction they have set aside for later.",

    'naga:Warrior': "Male naga fill the soldier's role in Azshara's forces in overwhelming numbers - broad, powerful, and inclined toward the martial purpose of enforcing the Sea Witch's will across the ocean floors and coastal territories. Naga warriors have served as the martial arm of naga civilization since its transformation from the highborne of ancient Kalimdor into the serpentine creatures the ocean made them. Their fighting style is adapted for their unique physiology - coiling torso, exceptional upper body strength, and a reach that most land-based opponents are not prepared for.",
    'naga:Priest': "The female naga have preserved a distorted reflection of the highborne arcane tradition into their oceanic existence, and the priestly arts survive among them in similarly transformed state. Naga priestesses serve as healers, seers, and spiritual intermediaries within Azshara's inner court - their connection to power flowing through the same absolute devotion that defines all naga social hierarchy. Their healing is real and their power considerable; it simply serves an agenda that is not their own.",
    'naga:Mage': "The naga were the highborne of ancient Kalimdor - the arcane elite of Queen Azshara's court - and the magical tradition they carried into the ocean has had ten thousand years to evolve in isolation. Female naga mages command an arcane framework entirely their own, shaped by aquatic existence and absolute loyalty to Azshara's ambitions. Their magical knowledge predates Dalaran, predates the Kirin Tor, and predates nearly every arcane institution on the surface of Azeroth. They do not consider themselves students of the arcane. They consider themselves its originators.",
    'naga:Marksman': "The naga have adapted the ranged traditions of the ancient highborne archers to their aquatic environment and serpentine bodies. Female naga marksmen wield weapons purpose-built for their physiology - powerful recurve bows and specialized javelins - with an accuracy refined by the stillness of deep water and ten thousand years of military service to the Sea Witch. On the surface, they are among the more unsettling combatants an enemy can face: disciplined, patient, and capable of covering angles that legs-based opponents simply cannot address.",

    'draenei:Priest': "The draenei carry with them an old tradition of seers and spirit disciples - practitioners who draw their power from communing with natural spirits rather than from any external faith. These spirit-healers are practical figures in draenei communities, tending wounds and reading omens with the same rough efficiency that characterizes everything the draenei do now. Their healing arts are rooted in the unseen world around them: the spirits of place, the echoes of the land, the voices that have sustained the draenei through generations of exile and loss.",
    'draenei:Rogue': "Draenei assassins are not the shadowy guild operators found in human cities, nor the spy-network operatives of the elves. They are something older and stranger - killers trained in mystical practices that blur the line between stealth and spirit-walking, their arts rooted in the same connection to the unseen world that defines draenei spiritual life. Among a people shaped entirely by survival, the assassin's role is straightforward: eliminate the threats that cannot be handled openly, using methods that leave few witnesses and even fewer explanations.",
    'draenei:Shaman': "The draenei practice a crude but effective form of shamanism, developed across generations of survival on Draenor rather than inherited from an ancient tradition. Draenei shamans are not ceremonial figures - they are problem-solvers, calling on earth and storm with the same direct, unornamented approach that defines their culture's relationship with everything. What they lack in the depth and refinement of orcish or tauren practice, they compensate for with the hard-worn certainty of those who learned the elements not from a teacher, but from necessity.",
    'draenei:Warrior': "The draenei maintain their own martial traditions, developed across generations of hiding, resistance, and survival on Draenor. Their warriors carry roles that reflect specific function rather than generic rank - guardians who protect the remaining settlements, protectors who hold the line against orcish incursion, watchers who patrol the boundaries, and darkslayers who hunt the threats that lurk beyond the firelight. They are not an organized army; they are fighters hardened by a conflict that has offered them neither peace nor quarter.",

    'goblin:Marksman': "Goblin marksmen are a fixture of cartel operations - enforcers, hired snipers, and bounty collectors who apply ranged skill to problems the Steamwheedle Cartel considers unresolvable through conventional commerce. The rifle is their tool of choice, and they apply it with the same practical efficiency that goblins bring to everything else. They do not carry causes. They carry contracts, and they fulfill them.",
    'goblin:Rogue': "The goblin cartel runs on information, leverage, and the quiet removal of obstacles - which is to say, it runs on rogues. Goblin operatives move through every port, market, and back-alley exchange in the known world, gathering intelligence for the highest bidder, lifting cargo when the paperwork is slower than the profit margin, and occasionally eliminating a competitor before the next meeting. Not every goblin rogue answers to a cartel, though - some cut their ties to Undermine entirely, operating on their own terms and keeping the full cut for themselves.",
    'goblin:Tinker': "The goblin tinker is the clearest expression of what goblins actually are: problem-solvers, provided the problem can be solved with sufficient funding and a willingness to accept structural damage as a line item. Their contraptions span the full range from brilliant to catastrophic. Tinkers approach mechanical invention with the same energy they apply to everything else - fast, loud, and convinced that any explosion they walk away from counts as a successful prototype.",
    'goblin:Warrior': "Goblin warriors are not ideologically committed to the martial arts - they are committed to their employer, for as long as the employer is committed to paying them. They are not the largest fighters on the battlefield, nor the most disciplined, but they are persistent and capable of inflicting considerably more damage than their size suggests - partly because they throw themselves into danger with an enthusiasm that more cautious fighters find baffling. The goblin warrior's greatest asset is not honor. It is the understanding that the person who wins the fight gets to negotiate the aftermath.",
    'goblin:Warlock': "Goblin warlocks treat demonic power the same way they treat any other commodity: a resource to be extracted, leveraged, and sold at a premium. Where other warlocks form dark pacts out of ambition or desperation, goblin warlocks approach them as business agreements - detailed, enforceable, and structured to ensure the goblin retains the favorable terms. They calculate that the return on investment justifies the risk, and they are very good at calculating risk - though their confidence in that math has, on occasion, been its own kind of problem.",
};

const FACTION_STYLES = {
    [newFactions.ALLIANCE]: {
        // WC3 image assets
        headerType: 'simple', wc3Race: 'human',
        bg: 'header-back.gif', left: 'header-left.gif', title: 'headers/humans.gif', right: 'header-right.gif',
        // CSS header
        accent: '#213478', accentDim: 'rgba(33,52,120,0.12)',
        nameColor: '#6a84c8',
        description: FACTION_DESCRIPTIONS[newFactions.ALLIANCE],
        subHeading: 'text-blue-400', subLine: 'border-blue-800/50',
    },
    [newFactions.HORDE]: {
        // WC3 image assets
        headerType: 'split', wc3Race: 'orc',
        bg: 'header-bg.gif', leftOuter: 'header-left.gif', leftInner: 'header-mid-left.gif',
        title: 'headers/orcs.gif', rightInner: 'header-mid-right.gif', rightOuter: 'header-right.gif',
        // CSS header
        accent: '#9c2423', accentDim: 'rgba(156,36,35,0.14)',
        nameColor: '#d4706f',
        description: FACTION_DESCRIPTIONS[newFactions.HORDE],
        subHeading: 'text-red-400', subLine: 'border-red-900/50',
    },
    [newFactions.FORSAKEN]: {
        // WC3 image assets
        headerType: 'split', wc3Race: 'undead',
        bg: 'header-bg-left.gif', leftOuter: 'header-left.gif', leftInner: 'header-left-left.gif',
        title: 'headers/undead.gif', rightInner: 'header-right-right.gif', rightOuter: 'header-right.gif',
        // CSS header
        accent: '#272a60', accentDim: 'rgba(39,42,96,0.13)',
        nameColor: '#7a80cc',
        description: FACTION_DESCRIPTIONS[newFactions.FORSAKEN],
        subHeading: 'text-indigo-400', subLine: 'border-indigo-900/50',
    },
    [newFactions.NIGHT_ELVES]: {
        // WC3 image assets
        headerType: 'simple', wc3Race: 'nightelf',
        bg: 'header-back.gif', left: 'header-left.gif', title: 'headers/nightelves.gif', right: 'header-right.gif',
        // CSS header
        accent: '#3c345b', accentDim: 'rgba(60,52,91,0.12)',
        nameColor: '#9d8fcc',
        description: FACTION_DESCRIPTIONS[newFactions.NIGHT_ELVES],
        subHeading: 'text-purple-400', subLine: 'border-purple-900/50',
    },
    [newFactions.ILLIDARI]: {
        // CSS header
        accent: '#23a008', accentDim: 'rgba(35,160,8,0.13)',
        nameColor: '#5ddb3a',
        description: FACTION_DESCRIPTIONS[newFactions.ILLIDARI],
        subHeading: 'text-green-400', subLine: 'border-green-900/50',
    },
    [newFactions.NEUTRAL]: {
        // CSS header
        accent: '#cc943e', accentDim: 'rgba(204,148,62,0.12)',
        nameColor: '#e8c07a',
        description: FACTION_DESCRIPTIONS[newFactions.NEUTRAL],
        subHeading: 'text-amber-400', subLine: 'border-amber-900/50',
    },
};

// WC3 image-based header logic lives in ./wc3-headers.js

function renderHeader(s, factionName) {
    return `
        <div class="mb-6" style="border-left: 4px solid ${s.accent}; padding-left: 1.25rem;">
            <div style="background: linear-gradient(to right, ${s.accentDim}, transparent); padding: 0.75rem 1rem 0.75rem 0; border-radius: 0 0.375rem 0.375rem 0;">
                <span style="font-size:1.75rem; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:${s.nameColor};">${factionName}</span>
            </div>
            <div style="height:1px; background: linear-gradient(to right, ${s.accent}, transparent); margin-top:2px; opacity:0.6;"></div>
            <p style="margin-top:0.75rem; font-size:0.875rem; line-height:1.6; color:rgba(209,213,219,0.75);">${s.description}</p>
        </div>
    `;
}

function getRaceIconUrl(icon) {
    if (!icon) return '';
    if (icon.startsWith('http')) return icon;
    if (icon.startsWith('assets/')) return `../../${icon}.jpg`;
    return `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;
}

function getClassIconUrl(className) {
    const overrides = {
        'Hunter': 'inv_spear_02', /*inv_throwingaxe_03, inv_throwingaxe_04, inv_axe_20, inv_axe_20_inverted, inv_spear_02*/
        'Marksman': 'classicon_hunter',
        'Tinker': 'inv_10_engineering_manufacturedparts_gear_uprez',
        'Witch Doctor': 'inv_staff_goldfeathered_01',
        'Runemaster': 'spell_fire_sealoffire',
    };
    const key = overrides[className] ?? `classicon_${className.toLowerCase().replace(/\s+/g, '')}`;
    return `https://wow.zamimg.com/images/wow/icons/large/${key}.jpg`;
}

function hasGenderDifference(raceId) {
    const data = customClassesByRace[raceId];
    if (!data?.genderVariants) return false;
    const m = data.genderVariants.male || {};
    const f = data.genderVariants.female || {};
    const mExtra = [...(m.additionalAvailableAtStart || []), ...(m.additionalAvailableThroughUnlock || [])];
    const fExtra = [...(f.additionalAvailableAtStart || []), ...(f.additionalAvailableThroughUnlock || [])];
    return mExtra.length > 0 || fExtra.length > 0;
}

function getClassesForGender(raceId, gender) {
    const data = customClassesByRace[raceId];
    if (!data) return { available: [], unlock: [] };
    const variant = data.genderVariants?.[gender] || {};
    return {
        available: [...data.availableAtStart, ...(variant.additionalAvailableAtStart || [])].sort(),
        unlock: [...data.availableThroughUnlock, ...(variant.additionalAvailableThroughUnlock || [])].sort(),
    };
}

function renderClassRow(classList, dimmed = false, raceId = null) {
    if (!classList.length) return '';
    return classList.map(cls => `
        <button class="class-icon-btn relative group ${dimmed ? 'opacity-30' : 'opacity-50'} hover:opacity-100 transition-opacity"
                data-race="${raceId}" data-class="${cls}" data-unlock="${dimmed}"
                style="background:none;border:none;padding:0;cursor:pointer;">
            <img src="${getClassIconUrl(cls)}" alt="${cls}"
                 class="w-8 h-8 rounded border border-gray-600 group-hover:border-yellow-400 transition-colors"
                 onerror="this.style.display='none'">
            <span class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5
                         bg-gray-900 border border-gray-600 text-gray-200 text-xs px-1.5 py-0.5 rounded
                         whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                ${cls}
            </span>
        </button>
    `).join('');
}

function renderClassSection(raceId, gender) {
    const { available, unlock } = getClassesForGender(raceId, gender);
    const unlockDivider = unlock.length > 0 ? `
        <div class="w-full flex items-center gap-2 my-1">
            <div class="flex-1 border-t border-gray-700"></div>
            <span class="text-xs text-gray-500 italic">unlock</span>
            <div class="flex-1 border-t border-gray-700"></div>
        </div>
        ${renderClassRow(unlock, true, raceId)}
    ` : '';
    return `
        <div class="flex flex-wrap gap-2 items-end">
            ${renderClassRow(available, false, raceId)}
            ${unlockDivider}
        </div>
    `;
}

function closeClassLorePopup() {
    document.getElementById('class-lore-overlay')?.remove();
}

function openClassLorePopup(raceId, className, isUnlock) {
    closeClassLorePopup();

    const loreKey = `${raceId}:${className}`;
    const lore = RACE_CLASS_DESCRIPTIONS[loreKey];
    const raceName = RACE_DISPLAY_NAMES[raceId] ?? raceBaseData[raceId]?.name ?? raceId;
    const classIconSrc = getClassIconUrl(className);

    const overlay = document.createElement('div');
    overlay.id = 'class-lore-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.72);';

    const popup = document.createElement('div');
    popup.style.cssText = 'position:relative;background:var(--tf-bg-panel);border:1px solid var(--tf-border-soft);border-radius:0.75rem;padding:1.5rem;max-width:480px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,0.7);';

    popup.innerHTML = `
        <button id="class-lore-close" style="position:absolute;top:0.75rem;right:0.75rem;background:none;border:none;color:#9ca3af;font-size:1.2rem;cursor:pointer;line-height:1;" aria-label="Close">✕</button>
        <div style="display:flex;align-items:center;gap:0.875rem;margin-bottom:1.1rem;">
            <img src="${classIconSrc}" style="width:3.25rem;height:3.25rem;border-radius:0.375rem;border:1px solid var(--tf-border-soft);flex-shrink:0;" onerror="this.style.display='none'">
            <div>
                <div style="font-size:1.1rem;font-weight:700;color:#facc15;line-height:1.2;">${className}</div>
                <div style="font-size:0.8rem;color:#9ca3af;margin-top:0.2rem;">${raceName}${isUnlock === 'true' ? ' <span style="font-style:italic;">(unlock)</span>' : ''}</div>
            </div>
        </div>
        <p style="font-size:0.875rem;line-height:1.75;color:rgba(209,213,219,0.85);margin:0;">${lore ?? '<em style="color:#6b7280;">Lore coming soon.</em>'}</p>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    popup.querySelector('#class-lore-close').addEventListener('click', closeClassLorePopup);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeClassLorePopup(); });

    const escHandler = e => {
        if (e.key === 'Escape') { closeClassLorePopup(); document.removeEventListener('keydown', escHandler); }
    };
    document.addEventListener('keydown', escHandler);
}

function renderRaceCard(raceId, isAllied) {
    const base = raceBaseData[raceId];
    const data = customClassesByRace[raceId];
    if (!base) return '';

    const hasDiff = hasGenderDifference(raceId);
    const variants = base.genderVariants || [];
    const maleVariant = variants.find(v => v.gender === 'male') || variants[0];
    const femaleVariant = variants.find(v => v.gender === 'female');

    const maleIconUrl = getRaceIconUrl(maleVariant?.icon);
    const femaleIconUrl = femaleVariant ? getRaceIconUrl(femaleVariant.icon) : maleIconUrl;

    const alliedBadge = isAllied
        ? `<span class="text-xs bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded ml-2 border border-gray-600">Allied</span>`
        : '';

    const showToggle = !!femaleVariant;
    const genderToggle = showToggle ? `
        <div class="flex gap-1 mt-1.5">
            <button class="gender-btn px-2 py-0.5 text-xs rounded border border-yellow-500 text-yellow-400"
                    data-race="${raceId}" data-gender="male" data-active="true">♂</button>
            <button class="gender-btn px-2 py-0.5 text-xs rounded border border-gray-600 text-gray-400"
                    data-race="${raceId}" data-gender="female" data-active="false">♀</button>
        </div>
    ` : '';

    let classContent;
    if (hasDiff) {
        classContent = `
            <div class="gender-classes" data-race="${raceId}" data-gender="male">
                ${renderClassSection(raceId, 'male')}
            </div>
            <div class="gender-classes hidden" data-race="${raceId}" data-gender="female">
                ${renderClassSection(raceId, 'female')}
            </div>
        `;
    } else if (data) {
        classContent = renderClassSection(raceId, 'male');
    } else {
        classContent = `<p class="text-xs text-gray-500 italic">No class data</p>`;
    }

    return `
        <div class="tf-panel-flat rounded-lg p-4 flex flex-col gap-3">
            <div class="flex items-center gap-3">
                <img class="race-icon w-12 h-12 rounded border border-gray-600 object-contain bg-gray-800"
                     src="${maleIconUrl}"
                     data-male-icon="${maleIconUrl}"
                     data-female-icon="${femaleIconUrl}"
                     data-race="${raceId}"
                     alt="${base.name}"
                     onerror="this.onerror=null;this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                <div>
                    <div class="flex items-center flex-wrap gap-1">
                        <span class="font-semibold text-gray-100">${RACE_DISPLAY_NAMES[raceId] ?? base.name}</span>
                        ${alliedBadge}
                    </div>
                    ${genderToggle}
                </div>
            </div>

            <div class="classes-section">
                ${classContent}
            </div>

            <div class="pt-2 border-t border-gray-700">
                <p class="text-xs text-gray-600 italic">Racial abilities - coming soon</p>
            </div>
        </div>
    `;
}

function renderFaction(faction) {
    const factionRaces = customRacesByFaction[faction];
    if (!factionRaces) return '';
    const s = FACTION_STYLES[faction];
    if (!s) return '';

    const baseHTML = (factionRaces.base || []).map(id => renderRaceCard(id, false)).join('');
    const alliedHTML = (factionRaces.allied || []).map(id => renderRaceCard(id, true)).join('');

    return `
        <section class="mb-12">
            ${renderHeader(s, faction)}

            <div class="mb-6">
                <h3 class="text-xs font-semibold ${s.subHeading} uppercase tracking-widest mb-3 pb-1 border-b ${s.subLine}">Playable Races</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    ${baseHTML}
                </div>
            </div>

            ${alliedHTML ? `
            <div>
                <h3 class="text-xs font-semibold ${s.subHeading} uppercase tracking-widest mb-3 pb-1 border-b ${s.subLine}">Allied Races</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    ${alliedHTML}
                </div>
            </div>
            ` : ''}
        </section>
    `;
}

function init() {
    const container = document.getElementById('peoples-container');
    if (!container) return;

    container.innerHTML = FACTIONS_TO_SHOW.map(renderFaction).join('');

    container.addEventListener('click', e => {
        const classBtn = e.target.closest('.class-icon-btn');
        if (classBtn) {
            openClassLorePopup(classBtn.dataset.race, classBtn.dataset.class, classBtn.dataset.unlock);
            return;
        }

        const btn = e.target.closest('.gender-btn');
        if (!btn) return;

        const raceId = btn.dataset.race;
        const gender = btn.dataset.gender;
        const card = btn.closest('.tf-panel-flat');

        card.querySelectorAll('.gender-btn').forEach(b => {
            const isActive = b.dataset.gender === gender;
            b.classList.toggle('border-yellow-500', isActive);
            b.classList.toggle('text-yellow-400', isActive);
            b.classList.toggle('border-gray-600', !isActive);
            b.classList.toggle('text-gray-400', !isActive);
        });

        card.querySelectorAll('.gender-classes').forEach(div => {
            div.classList.toggle('hidden', div.dataset.gender !== gender);
        });

        const raceImg = card.querySelector(`.race-icon[data-race="${raceId}"]`);
        if (raceImg) {
            raceImg.onerror = function() { this.onerror=null; this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'; };
            raceImg.src = gender === 'male' ? raceImg.dataset.maleIcon : raceImg.dataset.femaleIcon;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
