'use strict';

angular.module('emojilizerApp').factory('emojiService', function () {
	// Service logic

	var emojis = [
		{ emoji: 0xE04F, text: 'cat' },
		{ emoji: 0x1f604,	text: 'smile' },	// smiling face with open mouth and smiling eyes
		{ emoji: 0x1f603,	text: 'happy' },	// smiling face with open mouth
		{ emoji: 0x1f600,	text: 'grin' },	// grinning face
		{ emoji: 0x1f60a,	text: 'smiling face with smiling eyes' },	// smiling face with smiling eyes
		{ emoji: 0x263a,	text: 'white smiling' },	// white smiling face
		{ emoji: 0x1f609,	text: 'wink' },	// winking face
		{ emoji: 0x1f60d,	text: 'i love' },	// smiling face with heart-shaped eyes
		{ emoji: 0x1f618,	text: 'face throwing a kiss' },	// face throwing a kiss
		{ emoji: 0x1f61a,	text: 'kissing face with closed eyes' },	// kissing face with closed eyes
		{ emoji: 0x1f617,	text: 'kissing' },	// kissing face
		{ emoji: 0x1f619,	text: 'kissing face with smiling eyes' },	// kissing face with smiling eyes
		{ emoji: 0x1f61c,	text: 'face with stuck-out tongue and winking eye' },	// face with stuck-out tongue and winking eye
		{ emoji: 0x1f61d,	text: 'face with stuck-out tongue and tightly-closed eyes' },	// face with stuck-out tongue and tightly-closed eyes
		{ emoji: 0x1f61b,	text: 'face with stuck-out tongue' },	// face with stuck-out tongue
		{ emoji: 0x1f633,	text: 'flushed' },	// flushed face
		{ emoji: 0x1f601,	text: 'grinning face with smiling eyes' },	// grinning face with smiling eyes
		{ emoji: 0x1f614,	text: 'shy' },	// pensive face
		{ emoji: 0x1f60c,	text: 'relieved' },	// relieved face
		{ emoji: 0x1f612,	text: 'unamused' },	// unamused face
		{ emoji: 0x1f61e,	text: 'disappointed' },	// disappointed face
		{ emoji: 0x1f623,	text: 'persevering' },	// persevering face
		{ emoji: 0x1f622,	text: 'sad' },	// crying face
		{ emoji: 0x1f602,	text: 'face with tears of joy' },	// face with tears of joy
		{ emoji: 0x1f62d,	text: 'cry' },	// loudly crying face
		{ emoji: 0x1f62a,	text: 'sleepy' },	// sleepy face
		{ emoji: 0x1f625,	text: 'disappointed' },	// disappointed but relieved face
		{ emoji: 0x1f630,	text: 'face with open mouth and cold sweat' },	// face with open mouth and cold sweat
		{ emoji: 0x1f605,	text: 'smiling face with open mouth and cold sweat' },	// smiling face with open mouth and cold sweat
		{ emoji: 0x1f613,	text: 'face with cold sweat' },	// face with cold sweat
		{ emoji: 0x1f629,	text: 'weary' },	// weary face
		{ emoji: 0x1f62b,	text: 'tired' },	// tired face
		{ emoji: 0x1f628,	text: 'fearful' },	// fearful face
		{ emoji: 0x1f631,	text: 'oh no!' },	// face screaming in fear
		{ emoji: 0x1f620,	text: 'angry' },	// angry face
		{ emoji: 0x1f621,	text: 'pout' },	// pouting face
		{ emoji: 0x1f624,	text: 'face with look of triumph' },	// face with look of triumph
		{ emoji: 0x1f616,	text: 'confounded' },	// confounded face
		{ emoji: 0x1f606,	text: 'smiling face with open mouth and tightly-closed eyes' },	// smiling face with open mouth and tightly-closed eyes
		{ emoji: 0x1f60b,	text: 'face savouring delicious food' },	// face savouring delicious food
		{ emoji: 0x1f637,	text: 'face with medical mask' },	// face with medical mask
		{ emoji: 0x1f60e,	text: 'cool' },	// smiling face with sunglasses
		{ emoji: 0x1f634,	text: 'sleepy' },	// sleeping face
		{ emoji: 0x1f635,	text: 'dizzy' },	// dizzy face
		{ emoji: 0x1f632,	text: 'astonished' },	// astonished face
		{ emoji: 0x1f61f,	text: 'worried' },	// worried face
		{ emoji: 0x1f626,	text: 'frowning face with open mouth' },	// frowning face with open mouth
		{ emoji: 0x1f627,	text: 'anguished' },	// anguished face
		{ emoji: 0x1f608,	text: 'smiling face with horns' },	// smiling face with horns
		{ emoji: 0x1f47f,	text: 'imp' },	// imp
		{ emoji: 0x1f62e,	text: 'face with open mouth' },	// face with open mouth
		{ emoji: 0x1f62c,	text: 'embarrased' },	// grimacing face
		{ emoji: 0x1f610,	text: 'neutral' },	// neutral face
		{ emoji: 0x1f615,	text: 'confused' },	// confused face
		{ emoji: 0x1f62f,	text: 'hushed' },	// hushed face
		{ emoji: 0x1f636,	text: 'face without mouth' },	// face without mouth
		{ emoji: 0x1f607,	text: 'saint' },	// smiling face with halo
		{ emoji: 0x1f60f,	text: 'smirking' },	// smirking face
		{ emoji: 0x1f611,	text: 'expressionless' },	// expressionless face
		{ emoji: 0x1f472,	text: 'man with gua pi mao' },	// man with gua pi mao
		{ emoji: 0x1f473,	text: 'man with turban' },	// man with turban
		{ emoji: 0x1f46e,	text: 'police' },	// police officer
		{ emoji: 0x1f477,	text: 'worker' },	// construction worker
		{ emoji: 0x1f482,	text: 'guard' },	// guardsman
		{ emoji: 0x1f476,	text: 'baby' },	// baby
		{ emoji: 0x1f466,	text: 'boy' },	// boy
		{ emoji: 0x1f467,	text: 'girl' },	// girl
		{ emoji: 0x1f474,	text: 'old' },	// older man
		{ emoji: 0x1f475,	text: 'old woman' },	// older woman
		{ emoji: 0x1f468,	text: 'man' },	// man
		{ emoji: 0x1f469,	text: 'woman' },	// woman
		{ emoji: 0x1f471,	text: 'person with blond hair' },	// person with blond hair
		{ emoji: 0x1f47c,	text: 'baby angel' },	// baby angel
		{ emoji: 0x1f478,	text: 'princess' },	// princess
		{ emoji: 0x1f63a,	text: 'smiling cat face with open mouth' },	// smiling cat face with open mouth
		{ emoji: 0x1f638,	text: 'grinning cat face with smiling eyes' },	// grinning cat face with smiling eyes
		{ emoji: 0x1f63b,	text: 'smiling cat face with heart-shaped eyes' },	// smiling cat face with heart-shaped eyes
		{ emoji: 0x1f63d,	text: 'kissing cat face with closed eyes' },	// kissing cat face with closed eyes
		{ emoji: 0x1f63c,	text: 'cat face with wry smile' },	// cat face with wry smile
		{ emoji: 0x1f640,	text: 'weary cat face' },	// weary cat face
		{ emoji: 0x1f63f,	text: 'crying cat face' },	// crying cat face
		{ emoji: 0x1f639,	text: 'cat face with tears of joy' },	// cat face with tears of joy
		{ emoji: 0x1f63e,	text: 'pouting cat face' },	// pouting cat face
		{ emoji: 0x1f479,	text: 'japanese ogre' },	// japanese ogre
		{ emoji: 0x1f47a,	text: 'japanese goblin' },	// japanese goblin
		{ emoji: 0x1f648,	text: 'see-no-evil monkey' },	// see-no-evil monkey
		{ emoji: 0x1f649,	text: 'hear-no-evil monkey' },	// hear-no-evil monkey
		{ emoji: 0x1f64a,	text: 'speak-no-evil monkey' },	// speak-no-evil monkey
		{ emoji: 0x1f480,	text: 'skull' },	// skull
		{ emoji: 0x1f47d,	text: 'alien' },	// extraterrestrial alien
		{ emoji: 0x1f4a9,	text: 'shit' },	// pile of poo
		{ emoji: 0x1f525,	text: 'fire' },	// fire
		{ emoji: 0x2728,	text: 'sparkle' },	// sparkles
		{ emoji: 0x1f31f,	text: 'star' },	// glowing star
		{ emoji: 0x1f4ab,	text: 'dizzy symbol' },	// dizzy symbol
		{ emoji: 0x1f4a5,	text: 'boom' },	// collision symbol
		{ emoji: 0x1f4a2,	text: 'anger symbol' },	// anger symbol
		{ emoji: 0x1f4a6,	text: 'rain' },	// splashing sweat symbol
		{ emoji: 0x1f4a7,	text: 'drop' },	// droplet
		{ emoji: 0x1f4a4,	text: 'sleep' },	// sleeping symbol
		{ emoji: 0x1f4a8,	text: 'fart' },	// dash symbol
		{ emoji: 0x1f442,	text: 'ear' },	// ear
		{ emoji: 0x1f440,	text: 'eyes' },	// eyes
		{ emoji: 0x1f443,	text: 'nose' },	// nose
		{ emoji: 0x1f445,	text: 'tongue' },	// tongue
		{ emoji: 0x1f444,	text: 'mouth' },	// mouth
		{ emoji: 0x1f44d,	text: 'thumbs up' },	// thumbs up sign
		{ emoji: 0x1f44e,	text: 'thumbs down' },	// thumbs down sign
		{ emoji: 0x1f44a,	text: 'fist' },	// fisted hand sign
		{ emoji: 0x270a,	text: 'raised fist' },	// raised fist
		{ emoji: 0x270c,	text: 'victory' },	// victory hand
		{ emoji: 0x1f44b,	text: 'waving hand' },	// waving hand sign
		{ emoji: 0x270b,	text: 'raised hand' },	// raised hand
		{ emoji: 0x1f450,	text: 'open hands' },	// open hands sign
		{ emoji: 0x1f446,	text: 'white up pointing backhand index' },	// white up pointing backhand index
		{ emoji: 0x1f447,	text: 'white down pointing backhand index' },	// white down pointing backhand index
		{ emoji: 0x1f449,	text: 'white right pointing backhand index' },	// white right pointing backhand index
		{ emoji: 0x1f448,	text: 'white left pointing backhand index' },	// white left pointing backhand index
		{ emoji: 0x1f64c,	text: 'person raising both hands in celebration' },	// person raising both hands in celebration
		{ emoji: 0x1f64f,	text: 'person with folded hands' },	// person with folded hands
		{ emoji: 0x261d,	text: 'white up pointing index' },	// white up pointing index
		{ emoji: 0x1f44f,	text: 'clap' },	// clapping hands sign
		{ emoji: 0x1f4aa,	text: 'strong' },	// flexed biceps
		{ emoji: 0x1f6b6,	text: 'walk' },	// pedestrian
		{ emoji: 0x1f3c3,	text: 'run' },	// runner
		{ emoji: 0x1f483,	text: 'dance' },	// dancer
		{ emoji: 0x1f46b,	text: 'man and woman holding hands' },	// man and woman holding hands
		{ emoji: 0x1f46a,	text: 'family' },	// family
		{ emoji: 0x1f46c,	text: 'gay' },	// two men holding hands
		{ emoji: 0x1f46d,	text: 'lesb' },	// two women holding hands
		{ emoji: 0x1f48f,	text: 'kiss' },	// kiss
		{ emoji: 0x1f491,	text: 'lovers' },	// couple with heart
		{ emoji: 0x1f46f,	text: 'bunny' },	// woman with bunny ears
		{ emoji: 0x1f646,	text: 'face with ok gesture' },	// face with ok gesture
		{ emoji: 0x1f645,	text: 'face with no good gesture' },	// face with no good gesture
		{ emoji: 0x1f481,	text: 'information desk person' },	// information desk person
		{ emoji: 0x1f64b,	text: 'happy person raising one hand' },	// happy person raising one hand
		{ emoji: 0x1f486,	text: 'face massage' },	// face massage
		{ emoji: 0x1f487,	text: 'haircut' },	// haircut
		{ emoji: 0x1f485,	text: 'nail polish' },	// nail polish
		{ emoji: 0x1f470,	text: 'bride with veil' },	// bride with veil
		{ emoji: 0x1f64e,	text: 'person with pouting face' },	// person with pouting face
		{ emoji: 0x1f64d,	text: 'person frowning' },	// person frowning
		{ emoji: 0x1f647,	text: 'person bowing deeply' },	// person bowing deeply
		{ emoji: 0x1f3a9,	text: 'tophat' },	// top hat
		{ emoji: 0x1f451,	text: 'crown' },	// crown
		{ emoji: 0x1f452,	text: 'hat' },	// womans hat
		{ emoji: 0x1f45f,	text: 'sneaker' },	// athletic shoe
		{ emoji: 0x1f45e,	text: 'shoe' },	// mans shoe
		{ emoji: 0x1f461,	text: 'sandal' },	// womans sandal
		{ emoji: 0x1f460,	text: 'highheels' },	// high-heeled shoe
		{ emoji: 0x1f462,	text: 'boots' },	// womans boots
		{ emoji: 0x1f455,	text: 'tshirt' },	// t-shirt
		{ emoji: 0x1f454,	text: 'necktie' },	// necktie
		{ emoji: 0x1f45a,	text: 'clothes' },	// womans clothes
		{ emoji: 0x1f457,	text: 'dress' },	// dress
		{ emoji: 0x1f3bd,	text: 'running shirt with sash' },	// running shirt with sash
		{ emoji: 0x1f456,	text: 'jeans' },	// jeans
		{ emoji: 0x1f458,	text: 'kimono' },	// kimono
		{ emoji: 0x1f459,	text: 'bikini' },	// bikini
		{ emoji: 0x1f4bc,	text: 'briefcase' },	// briefcase
		{ emoji: 0x1f45c,	text: 'bag' },	// handbag
		{ emoji: 0x1f45d,	text: 'pouch' },	// pouch
		{ emoji: 0x1f45b,	text: 'purse' },	// purse
		{ emoji: 0x1f453,	text: 'eyeglasses' },	// eyeglasses
		{ emoji: 0x1f380,	text: 'ribbon' },	// ribbon
		{ emoji: 0x1f302,	text: 'umbrella' },	// closed umbrella
		{ emoji: 0x1f484,	text: 'lipstick' },	// lipstick
		{ emoji: 0x1f49b,	text: 'yellow heart' },	// yellow heart
		{ emoji: 0x1f499,	text: 'blue heart' },	// blue heart
		{ emoji: 0x1f49c,	text: 'purple heart' },	// purple heart
		{ emoji: 0x1f49a,	text: 'green heart' },	// green heart
		{ emoji: 0x2764,	text: 'heavy black heart' },	// heavy black heart
		{ emoji: 0x1f494,	text: 'heartbreak' },	// broken heart
		{ emoji: 0x1f497,	text: 'growing heart' },	// growing heart
		{ emoji: 0x1f493,	text: 'heart' },	// beating heart
		{ emoji: 0x1f495,	text: 'two hearts' },	// two hearts
		{ emoji: 0x1f496,	text: 'sparkling heart' },	// sparkling heart
		{ emoji: 0x1f49e,	text: 'love' },	// revolving hearts
		{ emoji: 0x1f498,	text: 'heart with arrow' },	// heart with arrow
		{ emoji: 0x1f48c,	text: 'love letter' },	// love letter
		{ emoji: 0x1f48b,	text: 'kiss' },	// kiss mark
		{ emoji: 0x1f48d,	text: 'ring' },	// ring
		{ emoji: 0x1f48e,	text: 'gem' },	// gem stone
		{ emoji: 0x1f464,	text: 'person' },	// bust in silhouette
		{ emoji: 0x1f465,	text: 'people' },	// busts in silhouette
		{ emoji: 0x1f4ac,	text: 'say' },	// speech balloon
		{ emoji: 0x1f463,	text: 'footprints' },	// footprints
		{ emoji: 0x1f4ad,	text: 'think' },	// thought balloon
		{ emoji: 0x1f436,	text: 'dog' },	// dog face
		{ emoji: 0x1f43a,	text: 'wolf' },	// wolf face
		{ emoji: 0x1f431,	text: 'cat' },	// cat face
		{ emoji: 0x1f42d,	text: 'mouse' },	// mouse face
		{ emoji: 0x1f439,	text: 'hamster' },	// hamster face
		{ emoji: 0x1f430,	text: 'rabbit' },	// rabbit face
		{ emoji: 0x1f438,	text: 'frog' },	// frog face
		{ emoji: 0x1f42f,	text: 'tiger' },	// tiger face
		{ emoji: 0x1f428,	text: 'koala' },	// koala
		{ emoji: 0x1f43b,	text: 'bear' },	// bear face
		{ emoji: 0x1f43d,	text: 'pig nose' },	// pig nose
		{ emoji: 0x1f437,	text: 'pig' },	// pig face
		{ emoji: 0x1f42e,	text: 'cow' },	// cow face
		{ emoji: 0x1f417,	text: 'boar' },	// boar
		{ emoji: 0x1f435,	text: 'monkey' },	// monkey face
		{ emoji: 0x1f412,	text: 'monkey' },	// monkey
		{ emoji: 0x1f434,	text: 'horse' },	// horse face
		{ emoji: 0x1f411,	text: 'sheep' },	// sheep
		{ emoji: 0x1f418,	text: 'elephant' },	// elephant
		{ emoji: 0x1f43c,	text: 'panda' },	// panda face
		{ emoji: 0x1f427,	text: 'penguin' },	// penguin
		{ emoji: 0x1f426,	text: 'bird' },	// bird
		{ emoji: 0x1f424,	text: 'chicklet' },	// baby chick
		{ emoji: 0x1f425,	text: 'front-facing baby chick' },	// front-facing baby chick
		{ emoji: 0x1f423,	text: 'hatch' },	// hatching chick
		{ emoji: 0x1f414,	text: 'chicken' },	// chicken
		{ emoji: 0x1f40d,	text: 'snake' },	// snake
		{ emoji: 0x1f422,	text: 'turtle' },	// turtle
		{ emoji: 0x1f41b,	text: 'bug' },	// bug
		{ emoji: 0x1f41d,	text: 'bee' },	// honeybee
		{ emoji: 0x1f41c,	text: 'ant' },	// ant
		{ emoji: 0x1f41e,	text: 'beetle' },	// lady beetle
		{ emoji: 0x1f40c,	text: 'snail' },	// snail
		{ emoji: 0x1f419,	text: 'octopus' },	// octopus
		{ emoji: 0x1f41a,	text: 'shell' },	// spiral shell
		{ emoji: 0x1f420,	text: 'tropical fish' },	// tropical fish
		{ emoji: 0x1f41f,	text: 'fish' },	// fish
		{ emoji: 0x1f42c,	text: 'dolphin' },	// dolphin
		{ emoji: 0x1f433,	text: 'spouting whale' },	// spouting whale
		{ emoji: 0x1f40b,	text: 'whale' },	// whale
		{ emoji: 0x1f404,	text: 'cow' },	// cow
		{ emoji: 0x1f40f,	text: 'goat ram' },	// ram
		{ emoji: 0x1f400,	text: 'rat' },	// rat
		{ emoji: 0x1f403,	text: 'buffalo' },	// water buffalo
		{ emoji: 0x1f405,	text: 'tiger' },	// tiger
		{ emoji: 0x1f407,	text: 'rabbit' },	// rabbit
		{ emoji: 0x1f409,	text: 'dragon' },	// dragon
		{ emoji: 0x1f40e,	text: 'horse' },	// horse
		{ emoji: 0x1f410,	text: 'goat' },	// goat
		{ emoji: 0x1f413,	text: 'rooster' },	// rooster
		{ emoji: 0x1f415,	text: 'dog' },	// dog
		{ emoji: 0x1f416,	text: 'pig' },	// pig
		{ emoji: 0x1f401,	text: 'mouse' },	// mouse
		{ emoji: 0x1f402,	text: 'ox' },	// ox
		
		{ emoji: 0x1f432,	text: 'dragon face' },	// dragon face
		{ emoji: 0x1f421,	text: 'blowfish' },	// blowfish
		{ emoji: 0x1f40a,	text: 'crocodile' },	// crocodile
		{ emoji: 0x1f42a,	text: 'dromedary camel' },	// dromedary camel
		{ emoji: 0x1f42b,	text: 'camel' },	// bactrian camel
		{ emoji: 0x1f406,	text: 'leopard' },	// leopard
		{ emoji: 0x1f408,	text: 'cat' },	// cat
		{ emoji: 0x1f429,	text: 'poodle' },	// poodle
		{ emoji: 0x1f43e,	text: 'paw prints' },	// paw prints
		{ emoji: 0x1f490,	text: 'flowers' },	// bouquet
		{ emoji: 0x1f338,	text: 'flower' },	// cherry blossom
		{ emoji: 0x1f337,	text: 'tulip' },	// tulip
		{ emoji: 0x1f340,	text: 'four leaf clover' },	// four leaf clover
		{ emoji: 0x1f339,	text: 'rose' },	// rose
		{ emoji: 0x1f33b,	text: 'sunflower' },	// sunflower
		{ emoji: 0x1f33a,	text: 'hibiscus' },	// hibiscus
		{ emoji: 0x1f341,	text: 'maple leaf' },	// maple leaf
		{ emoji: 0x1f342,	text: 'fallen leaf' },	// fallen leaf
		{ emoji: 0x1f343,	text: 'leaf' },	// leaf fluttering in wind
		{ emoji: 0x1f33f,	text: 'herb' },	// herb
		{ emoji: 0x1f33e,	text: 'ear of rice' },	// ear of rice
		{ emoji: 0x1f344,	text: 'mushroom' },	// mushroom
		{ emoji: 0x1f335,	text: 'cactus' },	// cactus
		{ emoji: 0x1f334,	text: 'palm tree' },	// palm tree
		{ emoji: 0x1f332,	text: 'evergreen tree' },	// evergreen tree
		{ emoji: 0x1f333,	text: 'deciduous tree' },	// deciduous tree
		{ emoji: 0x1f330,	text: 'chestnut' },	// chestnut
		{ emoji: 0x1f331,	text: 'seedling' },	// seedling
		{ emoji: 0x1f33c,	text: 'blossom' },	// blossom
		{ emoji: 0x1f310,	text: 'sphere' },	// globe with meridians
		{ emoji: 0x1f31e,	text: 'sun' },	// sun with face
		{ emoji: 0x1f31d,	text: 'full moon with face' },	// full moon with face
		{ emoji: 0x1f31a,	text: 'new moon with face' },	// new moon with face
		{ emoji: 0x1f311,	text: 'new moon symbol' },	// new moon symbol
		{ emoji: 0x1f312,	text: 'waxing crescent moon symbol' },	// waxing crescent moon symbol
		{ emoji: 0x1f313,	text: 'first quarter moon symbol' },	// first quarter moon symbol
		{ emoji: 0x1f314,	text: 'waxing gibbous moon symbol' },	// waxing gibbous moon symbol
		{ emoji: 0x1f315,	text: 'full moon symbol' },	// full moon symbol
		{ emoji: 0x1f316,	text: 'waning gibbous moon symbol' },	// waning gibbous moon symbol
		{ emoji: 0x1f317,	text: 'last quarter moon symbol' },	// last quarter moon symbol
		{ emoji: 0x1f318,	text: 'waning crescent moon symbol' },	// waning crescent moon symbol
		{ emoji: 0x1f31c,	text: 'last quarter moon with face' },	// last quarter moon with face
		{ emoji: 0x1f31b,	text: 'first quarter moon with face' },	// first quarter moon with face
		{ emoji: 0x1f319,	text: 'moon' },	// crescent moon
		{ emoji: 0x1f30d,	text: 'earth globe europe-africa' },	// earth globe europe-africa
		{ emoji: 0x1f30e,	text: 'earth' },	// earth globe americas
		{ emoji: 0x1f30f,	text: 'earth globe asia-australia' },	// earth globe asia-australia
		{ emoji: 0x1f30b,	text: 'volcano' },	// volcano
		{ emoji: 0x1f30c,	text: 'space' },	// milky way
		{ emoji: 0x1f320,	text: 'shooting star' },	// shooting star
		{ emoji: 0x2b50,	text: 'star' },	// white medium star
		{ emoji: 0x2600,	text: 'black sun with rays' },	// black sun with rays
		{ emoji: 0x26c5,	text: 'cloudy' },	// sun behind cloud
		{ emoji: 0x2601,	text: 'cloud' },	// cloud
		{ emoji: 0x26a1,	text: 'high voltage' },	// high voltage sign
		{ emoji: 0x2614,	text: 'umbrella with rain drops' },	// umbrella with rain drops
		{ emoji: 0x2744,	text: 'snowflake' },	// snowflake
		{ emoji: 0x26c4,	text: 'snowman without snow' },	// snowman without snow
		{ emoji: 0x1f300,	text: 'cyclone' },	// cyclone
		{ emoji: 0x1f301,	text: 'foggy' },	// foggy
		{ emoji: 0x1f308,	text: 'rainbow' },	// rainbow
		{ emoji: 0x1f30a,	text: 'wave' },	// water wave
		//objects
		{ emoji: 0x1f38d,	text: 'pine decoration' },	// pine decoration
		{ emoji: 0x1f49d,	text: 'heart with ribbon' },	// heart with ribbon
		{ emoji: 0x1f38e,	text: 'japanese dolls' },	// japanese dolls
		{ emoji: 0x1f392,	text: 'school satchel' },	// school satchel
		{ emoji: 0x1f393,	text: 'graduation cap' },	// graduation cap
		{ emoji: 0x1f38f,	text: 'carp streamer' },	// carp streamer
		{ emoji: 0x1f386,	text: 'fireworks' },	// fireworks
		{ emoji: 0x1f387,	text: 'firework sparkler' },	// firework sparkler
		{ emoji: 0x1f390,	text: 'wind chime' },	// wind chime
		{ emoji: 0x1f391,	text: 'moon viewing ceremony' },	// moon viewing ceremony
		{ emoji: 0x1f383,	text: 'jack-o-lantern' },	// jack-o-lantern
		{ emoji: 0x1f47b,	text: 'ghost' },	// ghost
		{ emoji: 0x1f385,	text: 'santa' },	// father christmas
		{ emoji: 0x1f384,	text: 'christmas tree' },	// christmas tree
		{ emoji: 0x1f381,	text: 'wrapped present' },	// wrapped present
		{ emoji: 0x1f38b,	text: 'tanabata tree' },	// tanabata tree
		{ emoji: 0x1f389,	text: 'party popper' },	// party popper
		{ emoji: 0x1f38a,	text: 'confetti ball' },	// confetti ball
		{ emoji: 0x1f388,	text: 'balloon' },	// balloon
		{ emoji: 0x1f38c,	text: 'crossed flags' },	// crossed flags
		{ emoji: 0x1f52e,	text: 'crystal ball' },	// crystal ball
		{ emoji: 0x1f3a5,	text: 'movie camera' },	// movie camera
		{ emoji: 0x1f4f7,	text: 'camera' },	// camera
		{ emoji: 0x1f4f9,	text: 'video camera' },	// video camera
		{ emoji: 0x1f4fc,	text: 'videocassette' },	// videocassette
		{ emoji: 0x1f4bf,	text: 'optical disc' },	// optical disc
		{ emoji: 0x1f4c0,	text: 'dvd' },	// dvd
		{ emoji: 0x1f4bd,	text: 'minidisc' },	// minidisc
		{ emoji: 0x1f4be,	text: 'floppy disk' },	// floppy disk
		{ emoji: 0x1f4bb,	text: 'computer' },	// personal computer
		{ emoji: 0x1f4f1,	text: 'phone' },	// mobile phone
		{ emoji: 0x260e,	text: 'black telephone' },	// black telephone
		{ emoji: 0x1f4de,	text: 'telephone receiver' },	// telephone receiver
		{ emoji: 0x1f4df,	text: 'pager' },	// pager
		{ emoji: 0x1f4e0,	text: 'fax' },	// fax machine
		{ emoji: 0x1f4e1,	text: 'satellite antenna' },	// satellite antenna
		{ emoji: 0x1f4fa,	text: 'tv' },	// television
		{ emoji: 0x1f4fb,	text: 'radio' },	// radio
		{ emoji: 0x1f50a,	text: 'speaker with three sound waves' },	// speaker with three sound waves
		{ emoji: 0x1f509,	text: 'speaker with one sound wave' },	// speaker with one sound wave
		{ emoji: 0x1f508,	text: 'speaker' },	// speaker
		{ emoji: 0x1f507,	text: 'speaker with cancellation stroke' },	// speaker with cancellation stroke
		{ emoji: 0x1f514,	text: 'bell' },	// bell
		{ emoji: 0x1f515,	text: 'bell with cancellation stroke' },	// bell with cancellation stroke
		{ emoji: 0x1f4e2,	text: 'public address loudspeaker' },	// public address loudspeaker
		{ emoji: 0x1f4e3,	text: 'cheering megaphone' },	// cheering megaphone
		{ emoji: 0x23f3,	text: 'hourglass with flowing sand' },	// hourglass with flowing sand
		{ emoji: 0x231b,	text: 'hourglass' },	// hourglass
		{ emoji: 0x23f0,	text: 'alarm' },	// alarm clock
		{ emoji: 0x231a,	text: 'watch' },	// watch
		{ emoji: 0x1f513,	text: 'open lock' },	// open lock
		{ emoji: 0x1f512,	text: 'lock' },	// lock
		{ emoji: 0x1f50f,	text: 'lock with ink pen' },	// lock with ink pen
		{ emoji: 0x1f510,	text: 'closed lock with key' },	// closed lock with key
		{ emoji: 0x1f511,	text: 'key' },	// key
		{ emoji: 0x1f50e,	text: 'right-pointing magnifying glass' },	// right-pointing magnifying glass
		{ emoji: 0x1f4a1,	text: 'electric light bulb' },	// electric light bulb
		{ emoji: 0x1f526,	text: 'electric torch' },	// electric torch
		{ emoji: 0x1f506,	text: 'high brightness symbol' },	// high brightness symbol
		{ emoji: 0x1f505,	text: 'low brightness symbol' },	// low brightness symbol
		{ emoji: 0x1f50c,	text: 'electric plug' },	// electric plug
		{ emoji: 0x1f50b,	text: 'battery' },	// battery
		{ emoji: 0x1f50d,	text: 'left-pointing magnifying glass' },	// left-pointing magnifying glass
		{ emoji: 0x1f6c1,	text: 'bathtub' },	// bathtub
		{ emoji: 0x1f6c0,	text: 'bath' },	// bath
		{ emoji: 0x1f6bf,	text: 'shower' },	// shower
		{ emoji: 0x1f6bd,	text: 'toilet' },	// toilet
		{ emoji: 0x1f527,	text: 'wrench' },	// wrench
		{ emoji: 0x1f529,	text: 'nut and bolt' },	// nut and bolt
		{ emoji: 0x1f528,	text: 'hammer' },	// hammer
		{ emoji: 0x1f6aa,	text: 'door' },	// door
		{ emoji: 0x1f6ac,	text: 'smoking symbol' },	// smoking symbol
		{ emoji: 0x1f4a3,	text: 'bomb' },	// bomb
		{ emoji: 0x1f52b,	text: 'pistol' },	// pistol
		{ emoji: 0x1f52a,	text: 'hocho' },	// hocho
		{ emoji: 0x1f48a,	text: 'pill' },	// pill
		{ emoji: 0x1f489,	text: 'syringe' },	// syringe
		{ emoji: 0x1f4b0,	text: 'money bag' },	// money bag
		{ emoji: 0x1f4b4,	text: 'banknote with yen' },	// banknote with yen sign
		{ emoji: 0x1f4b5,	text: 'money' },	// banknote with dollar sign
		{ emoji: 0x1f4b7,	text: 'banknote with pound' },	// banknote with pound sign
		{ emoji: 0x1f4b6,	text: 'banknote with euro' },	// banknote with euro sign
		{ emoji: 0x1f4b3,	text: 'credit card' },	// credit card
		{ emoji: 0x1f4b8,	text: 'money with wings' },	// money with wings
		{ emoji: 0x1f4f2,	text: 'mobile phone with rightwards arrow at left' },	// mobile phone with rightwards arrow at left
		{ emoji: 0x1f4e7,	text: 'e-mail symbol' },	// e-mail symbol
		{ emoji: 0x1f4e5,	text: 'inbox tray' },	// inbox tray
		{ emoji: 0x1f4e4,	text: 'outbox tray' },	// outbox tray
		{ emoji: 0x2709,	text: 'envelope' },	// envelope
		{ emoji: 0x1f4e9,	text: 'envelope with downwards arrow above' },	// envelope with downwards arrow above
		{ emoji: 0x1f4e8,	text: 'incoming envelope' },	// incoming envelope
		{ emoji: 0x1f4ef,	text: 'postal horn' },	// postal horn
		{ emoji: 0x1f4eb,	text: 'closed mailbox with raised flag' },	// closed mailbox with raised flag
		{ emoji: 0x1f4ea,	text: 'closed mailbox with lowered flag' },	// closed mailbox with lowered flag
		{ emoji: 0x1f4ec,	text: 'open mailbox with raised flag' },	// open mailbox with raised flag
		{ emoji: 0x1f4ed,	text: 'open mailbox with lowered flag' },	// open mailbox with lowered flag
		{ emoji: 0x1f4ee,	text: 'postbox' },	// postbox
		{ emoji: 0x1f4e6,	text: 'package' },	// package
		{ emoji: 0x1f4dd,	text: 'memo' },	// memo
		{ emoji: 0x1f4c4,	text: 'page facing up' },	// page facing up
		{ emoji: 0x1f4c3,	text: 'page with curl' },	// page with curl
		{ emoji: 0x1f4d1,	text: 'bookmark tabs' },	// bookmark tabs
		{ emoji: 0x1f4ca,	text: 'bar chart' },	// bar chart
		{ emoji: 0x1f4c8,	text: 'chart with upwards trend' },	// chart with upwards trend
		{ emoji: 0x1f4c9,	text: 'chart with downwards trend' },	// chart with downwards trend
		{ emoji: 0x1f4dc,	text: 'scroll' },	// scroll
		{ emoji: 0x1f4cb,	text: 'clipboard' },	// clipboard
		{ emoji: 0x1f4c5,	text: 'calendar' },	// calendar
		{ emoji: 0x1f4c6,	text: 'tear-off calendar' },	// tear-off calendar
		{ emoji: 0x1f4c7,	text: 'card index' },	// card index
		{ emoji: 0x1f4c1,	text: 'file folder' },	// file folder
		{ emoji: 0x1f4c2,	text: 'open file folder' },	// open file folder
		{ emoji: 0x2702,	text: 'black scissors' },	// black scissors
		{ emoji: 0x1f4cc,	text: 'pushpin' },	// pushpin
		{ emoji: 0x1f4ce,	text: 'paperclip' },	// paperclip
		{ emoji: 0x2712,	text: 'black nib' },	// black nib
		{ emoji: 0x270f,	text: 'pencil' },	// pencil
		{ emoji: 0x1f4cf,	text: 'straight ruler' },	// straight ruler
		{ emoji: 0x1f4d0,	text: 'triangular ruler' },	// triangular ruler
		{ emoji: 0x1f4d5,	text: 'closed book' },	// closed book
		{ emoji: 0x1f4d7,	text: 'green book' },	// green book
		{ emoji: 0x1f4d8,	text: 'blue book' },	// blue book
		{ emoji: 0x1f4d9,	text: 'orange book' },	// orange book
		{ emoji: 0x1f4d3,	text: 'notebook' },	// notebook
		{ emoji: 0x1f4d4,	text: 'notebook with decorative cover' },	// notebook with decorative cover
		{ emoji: 0x1f4d2,	text: 'ledger' },	// ledger
		{ emoji: 0x1f4da,	text: 'books' },	// books
		{ emoji: 0x1f4d6,	text: 'read' },	// open book
		{ emoji: 0x1f516,	text: 'bookmark' },	// bookmark
		{ emoji: 0x1f4db,	text: 'badge' },	// name badge
		{ emoji: 0x1f52c,	text: 'microscope' },	// microscope
		{ emoji: 0x1f52d,	text: 'telescope' },	// telescope
		{ emoji: 0x1f4f0,	text: 'newspaper' },	// newspaper
		{ emoji: 0x1f3a8,	text: 'palette' },	// artist palette
		{ emoji: 0x1f3ac,	text: 'clapper board' },	// clapper board
		{ emoji: 0x1f3a4,	text: 'microphone' },	// microphone
		{ emoji: 0x1f3a7,	text: 'headphone' },	// headphone
		{ emoji: 0x1f3bc,	text: 'musical score' },	// musical score
		{ emoji: 0x1f3b5,	text: 'musical note' },	// musical note
		{ emoji: 0x1f3b6,	text: 'multiple musical notes' },	// multiple musical notes
		{ emoji: 0x1f3b9,	text: 'musical keyboard' },	// musical keyboard
		{ emoji: 0x1f3bb,	text: 'violin' },	// violin
		{ emoji: 0x1f3ba,	text: 'trumpet' },	// trumpet
		{ emoji: 0x1f3b7,	text: 'saxophone' },	// saxophone
		{ emoji: 0x1f3b8,	text: 'guitar' },	// guitar
		{ emoji: 0x1f47e,	text: 'alien monster' },	// alien monster
		{ emoji: 0x1f3ae,	text: 'video game' },	// video game
		{ emoji: 0x1f0cf,	text: 'joker' },	// playing card black joker
		{ emoji: 0x1f3b4,	text: 'cards' },	// flower playing cards
		{ emoji: 0x1f004,	text: 'mahjong' },	// mahjong tile red dragon
		{ emoji: 0x1f3b2,	text: 'game die' },	// game die
		{ emoji: 0x1f3af,	text: 'bullseye' },	// direct hit
		{ emoji: 0x1f3c8,	text: 'american football' },	// american football
		{ emoji: 0x1f3c0,	text: 'basketball' },	// basketball and hoop
		{ emoji: 0x26bd,	text: 'football' },	// soccer ball
		{ emoji: 0x26be,	text: 'baseball' },	// baseball
		{ emoji: 0x1f3be,	text: 'tennis' },	// tennis racquet and ball
		{ emoji: 0x1f3b1,	text: 'billiards' },	// billiards
		{ emoji: 0x1f3c9,	text: 'rugby' },	// rugby football
		{ emoji: 0x1f3b3,	text: 'bowling' },	// bowling
		{ emoji: 0x26f3,	text: 'hole' },	// flag in hole
		{ emoji: 0x1f6b5,	text: 'mountain bicyclist' },	// mountain bicyclist
		{ emoji: 0x1f6b4,	text: 'bicyclist' },	// bicyclist
		{ emoji: 0x1f3c1,	text: 'chequered flag' },	// chequered flag
		{ emoji: 0x1f3c7,	text: 'horse race' },	// horse racing
		{ emoji: 0x1f3c6,	text: 'trophy' },	// trophy
		{ emoji: 0x1f3bf,	text: 'ski' },	// ski and ski boot
		{ emoji: 0x1f3c2,	text: 'snowboard' },	// snowboarder
		{ emoji: 0x1f3ca,	text: 'swimmer' },	// swimmer
		{ emoji: 0x1f3c4,	text: 'surfer' },	// surfer
		{ emoji: 0x1f3a3,	text: 'fishing pole and fish' },	// fishing pole and fish
		{ emoji: 0x2615,	text: 'coffee' },	// hot beverage
		{ emoji: 0x1f375,	text: 'tea' },	// teacup without handle
		{ emoji: 0x1f376,	text: 'sake bottle and cup' },	// sake bottle and cup
		{ emoji: 0x1f37c,	text: 'baby bottle' },	// baby bottle
		{ emoji: 0x1f37a,	text: 'beer' },	// beer mug
		{ emoji: 0x1f37b,	text: 'cheers' },	// clinking beer mugs
		{ emoji: 0x1f378,	text: 'cocktail' },	// cocktail glass
		{ emoji: 0x1f379,	text: 'drinks' },	// tropical drink
		{ emoji: 0x1f377,	text: 'wine' },	// wine glass
		{ emoji: 0x1f374,	text: 'eat' },	// fork and knife
		{ emoji: 0x1f355,	text: 'pizza' },	// slice of pizza
		{ emoji: 0x1f354,	text: 'hamburger' },	// hamburger
		{ emoji: 0x1f35f,	text: 'fries' },	// french fries
		{ emoji: 0x1f357,	text: 'poultry leg' },	// poultry leg
		{ emoji: 0x1f356,	text: 'steak' },	// meat on bone
		{ emoji: 0x1f35d,	text: 'pasta' },	// spaghetti
		{ emoji: 0x1f35b,	text: 'curry and rice' },	// curry and rice
		{ emoji: 0x1f364,	text: 'fried shrimp' },	// fried shrimp
		{ emoji: 0x1f371,	text: 'bento' },	// bento box
		{ emoji: 0x1f363,	text: 'sushi' },	// sushi
		{ emoji: 0x1f365,	text: 'fish cake with swirl design' },	// fish cake with swirl design
		{ emoji: 0x1f359,	text: 'rice ball' },	// rice ball
		{ emoji: 0x1f358,	text: 'rice cracker' },	// rice cracker
		{ emoji: 0x1f35a,	text: 'cooked rice' },	// cooked rice
		{ emoji: 0x1f35c,	text: 'steaming bowl' },	// steaming bowl
		{ emoji: 0x1f372,	text: 'pot of food' },	// pot of food
		{ emoji: 0x1f362,	text: 'oden' },	// oden
		{ emoji: 0x1f361,	text: 'dango' },	// dango
		{ emoji: 0x1f373,	text: 'cooking' },	// cooking
		{ emoji: 0x1f35e,	text: 'bread' },	// bread
		{ emoji: 0x1f369,	text: 'doughnut' },	// doughnut
		{ emoji: 0x1f36e,	text: 'custard' },	// custard
		{ emoji: 0x1f366,	text: 'soft ice cream' },	// soft ice cream
		{ emoji: 0x1f368,	text: 'ice cream' },	// ice cream
		{ emoji: 0x1f367,	text: 'shaved ice' },	// shaved ice
		{ emoji: 0x1f382,	text: 'birthday cake' },	// birthday cake
		{ emoji: 0x1f370,	text: 'shortcake' },	// shortcake
		{ emoji: 0x1f36a,	text: 'cookie' },	// cookie
		{ emoji: 0x1f36b,	text: 'chocolate' },	// chocolate bar
		{ emoji: 0x1f36c,	text: 'candy' },	// candy
		{ emoji: 0x1f36d,	text: 'lollipop' },	// lollipop
		{ emoji: 0x1f36f,	text: 'honey pot' },	// honey pot
		{ emoji: 0x1f34e,	text: 'red apple' },	// red apple
		{ emoji: 0x1f34f,	text: 'apple' },	// green apple
		{ emoji: 0x1f34a,	text: 'tangerine' },	// tangerine
		{ emoji: 0x1f34b,	text: 'lemon' },	// lemon
		{ emoji: 0x1f352,	text: 'cherries' },	// cherries
		{ emoji: 0x1f347,	text: 'grapes' },	// grapes
		{ emoji: 0x1f349,	text: 'watermelon' },	// watermelon
		{ emoji: 0x1f353,	text: 'strawberry' },	// strawberry
		{ emoji: 0x1f351,	text: 'peach' },	// peach
		{ emoji: 0x1f348,	text: 'melon' },	// melon
		{ emoji: 0x1f34c,	text: 'banana' },	// banana
		{ emoji: 0x1f350,	text: 'pear' },	// pear
		{ emoji: 0x1f34d,	text: 'pineapple' },	// pineapple
		{ emoji: 0x1f360,	text: 'sweet potato' },	// roasted sweet potato
		{ emoji: 0x1f346,	text: 'aubergine' },	// aubergine
		{ emoji: 0x1f345,	text: 'tomato' },	// tomato
		{ emoji: 0x1f33d,	text: 'maize' },	// ear of maize
		// places
		{ emoji: 0x1f3e0,	text: 'house building' },	// house building
		{ emoji: 0x1f3e1,	text: 'house with garden' },	// house with garden
		{ emoji: 0x1f3eb,	text: 'school' },	// school
		{ emoji: 0x1f3e2,	text: 'office building' },	// office building
		{ emoji: 0x1f3e3,	text: 'japanese post office' },	// japanese post office
		{ emoji: 0x1f3e5,	text: 'hospital' },	// hospital
		{ emoji: 0x1f3e6,	text: 'bank' },	// bank
		{ emoji: 0x1f3ea,	text: 'convenience store' },	// convenience store
		{ emoji: 0x1f3e9,	text: 'love hotel' },	// love hotel
		{ emoji: 0x1f3e8,	text: 'hotel' },	// hotel
		{ emoji: 0x1f492,	text: 'wedding' },	// wedding
		{ emoji: 0x26ea,	text: 'church' },	// church
		{ emoji: 0x1f3ec,	text: 'shop' },	// department store
		{ emoji: 0x1f3e4,	text: 'post office' },	// european post office
		{ emoji: 0x1f307,	text: 'sunset over buildings' },	// sunset over buildings
		{ emoji: 0x1f306,	text: 'cityscape at dusk' },	// cityscape at dusk
		{ emoji: 0x1f3ef,	text: 'japanese castle' },	// japanese castle
		{ emoji: 0x1f3f0,	text: 'european castle' },	// european castle
		{ emoji: 0x26fa,	text: 'tent' },	// tent
		{ emoji: 0x1f3ed,	text: 'factory' },	// factory
		{ emoji: 0x1f5fc,	text: 'tokyo tower' },	// tokyo tower
		{ emoji: 0x1f5fe,	text: 'silhouette of japan' },	// silhouette of japan
		{ emoji: 0x1f5fb,	text: 'mount fuji' },	// mount fuji
		{ emoji: 0x1f304,	text: 'sunrise over mountains' },	// sunrise over mountains
		{ emoji: 0x1f305,	text: 'sunrise' },	// sunrise
		{ emoji: 0x1f303,	text: 'night with stars' },	// night with stars
		{ emoji: 0x1f5fd,	text: 'statue of liberty' },	// statue of liberty
		{ emoji: 0x1f309,	text: 'bridge at night' },	// bridge at night
		{ emoji: 0x1f3a0,	text: 'carousel horse' },	// carousel horse
		{ emoji: 0x1f3a1,	text: 'ferris wheel' },	// ferris wheel
		{ emoji: 0x26f2,	text: 'fountain' },	// fountain
		{ emoji: 0x1f3a2,	text: 'roller coaster' },	// roller coaster
		{ emoji: 0x1f6a2,	text: 'ship' },	// ship
		{ emoji: 0x26f5,	text: 'sailboat' },	// sailboat
		{ emoji: 0x1f6a4,	text: 'speedboat' },	// speedboat
		{ emoji: 0x1f6a3,	text: 'rowboat' },	// rowboat
		{ emoji: 0x2693,	text: 'anchor' },	// anchor
		{ emoji: 0x1f680,	text: 'rocket' },	// rocket
		{ emoji: 0x2708,	text: 'airplane' },	// airplane
		{ emoji: 0x1f4ba,	text: 'seat' },	// seat
		{ emoji: 0x1f681,	text: 'helicopter' },	// helicopter
		{ emoji: 0x1f682,	text: 'locomotive' },	// steam locomotive
		{ emoji: 0x1f68a,	text: 'tram' },	// tram
		{ emoji: 0x1f689,	text: 'station' },	// station
		{ emoji: 0x1f69e,	text: 'mountain railway' },	// mountain railway
		{ emoji: 0x1f686,	text: 'train' },	// train
		{ emoji: 0x1f684,	text: 'high-speed train' },	// high-speed train
		{ emoji: 0x1f685,	text: 'high-speed train with bullet nose' },	// high-speed train with bullet nose
		{ emoji: 0x1f688,	text: 'light rail' },	// light rail
		{ emoji: 0x1f687,	text: 'subway' },	// metro
		{ emoji: 0x1f69d,	text: 'monorail' },	// monorail
		{ emoji: 0x1f68b,	text: 'tram car' },	// tram car
		{ emoji: 0x1f683,	text: 'railway' },	// railway car
		{ emoji: 0x1f68e,	text: 'trolleybus' },	// trolleybus
		{ emoji: 0x1f68d,	text: 'oncoming bus' },	// oncoming bus
		{ emoji: 0x1f699,	text: 'recreational vehicle' },	// recreational vehicle
		{ emoji: 0x1f698,	text: 'oncoming automobile' },	// oncoming automobile
		{ emoji: 0x1f696,	text: 'oncoming taxi' },	// oncoming taxi
		{ emoji: 0x1f695,	text: 'taxi' },	// taxi
		{ emoji: 0x1f69b,	text: 'lorry' },	// articulated lorry
		{ emoji: 0x1f69a,	text: 'truck' },	// delivery truck
		{ emoji: 0x1f6a8,	text: 'police cars revolving light' },	// police cars revolving light
		{ emoji: 0x1f693,	text: 'police car' },	// police car
		{ emoji: 0x1f694,	text: 'oncoming police car' },	// oncoming police car
		{ emoji: 0x1f692,	text: 'fire engine' },	// fire engine
		{ emoji: 0x1f691,	text: 'ambulance' },	// ambulance
		{ emoji: 0x1f690,	text: 'minibus' },	// minibus
		{ emoji: 0x1f6b2,	text: 'bicycle' },	// bicycle
		{ emoji: 0x1f6a1,	text: 'aerial tramway' },	// aerial tramway
		{ emoji: 0x1f69f,	text: 'suspension railway' },	// suspension railway
		{ emoji: 0x1f6a0,	text: 'mountain cableway' },	// mountain cableway
		{ emoji: 0x1f69c,	text: 'tractor' },	// tractor
		{ emoji: 0x1f488,	text: 'barber pole' },	// barber pole
		{ emoji: 0x1f68f,	text: 'bus stop' },	// bus stop
		{ emoji: 0x1f68c,	text: 'bus' },	// bus
		{ emoji: 0x1f697,	text: 'car' },	// automobile
		{ emoji: 0x1f3ab,	text: 'ticket' },	// ticket
		{ emoji: 0x1f6a6,	text: 'vertical traffic light' },	// vertical traffic light
		{ emoji: 0x1f6a5,	text: 'horizontal traffic light' },	// horizontal traffic light
		{ emoji: 0x26a0,	text: 'warning' },	// warning sign
		{ emoji: 0x1f6a7,	text: 'construction' },	// construction sign
		{ emoji: 0x1f530,	text: 'japanese symbol for beginner' },	// japanese symbol for beginner
		{ emoji: 0x26fd,	text: 'fuel' },	// fuel pump
		{ emoji: 0x1f3ee,	text: 'izakaya lantern' },	// izakaya lantern
		{ emoji: 0x1f3b0,	text: 'slot machine' },	// slot machine
		{ emoji: 0x2668,	text: 'hot springs' },	// hot springs
		{ emoji: 0x1f5ff,	text: 'moyai' },	// moyai
		{ emoji: 0x1f3aa,	text: 'circus tent' },	// circus tent
		{ emoji: 0x1f3ad,	text: 'performing arts' },	// performing arts
		{ emoji: 0x1f4cd,	text: 'pin' },	// round pushpin
		{ emoji: 0x1f6a9,	text: 'triangular flag on post' },	// triangular flag on post
		// symbols
		{ emoji: 0x2b06,	text: 'up' },	// upwards black arrow
		{ emoji: 0x2b07,	text: 'down' },	// downwards black arrow
		{ emoji: 0x2b05,	text: 'left' },	// leftwards black arrow
		{ emoji: 0x27a1,	text: 'right' },	// black rightwards arrow
		{ emoji: 0x1f6bb,	text: 'toilet' },	// restroom
		{ emoji: 0x1f6ab,	text: 'forbidden' },	// no entry sign
		{ emoji: 0x1f557,	text: 'time' },	// clock face eight oclock
		{ emoji: 0x1f558,	text: 'clock' },	// clock face nine oclock

		{ emoji: 0x1f44c,	text: 'ok' },	// ok hand sign
		/*
		*/
	];

	var stringFromCodePoint = function () {
			var chars = Array.prototype.slice.call(arguments);
			for (var i = chars.length; i-->0;) {
					var n = chars[i]-0x10000;
					if (n >= 0) {
						chars.splice(i, 1, 0xD800+(n>>10), 0xDC00+(n&0x3FF));
					}
			}
			return String.fromCharCode.apply(null, chars);
	};

	var emojiCodeToString = function (text, code) {
		return stringFromCodePoint(code);
	};

	// Public API here
	return { 
		
		convert: function (text) {
			var newText = text;
			for (var i in emojis) {
				//console.log(i, emojis[i].text, emojis[i].emoji);
				newText = newText.replace(new RegExp(emojis[i].text, 'ig'), emojiCodeToString(emojis[i].text, emojis[i].emoji) );
			}
			return newText;
		}

	};

});