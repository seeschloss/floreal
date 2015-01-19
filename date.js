var roman = require('roman-numerals');

var day_names = [
	'',	// align with day numbers
	'raisin',
	'safran',
	'châtaigne',
	'colchique',
	'cheval',
	'balsamine',
	'carotte',
	'amaranthe',
	'panais',
	'cuve',
	'pomme de terre',
	'immortelle',
	'potiron',
	'réséda',
	'âne',
	'belle de nuit',
	'citrouille',
	'sarrasin',
	'tournesol',
	'pressoir',
	'chanvre',
	'pêche',
	'navet',
	'amaryllis',
	'bœuf',
	'aubergine',
	'piment',
	'tomate',
	'orge',
	'tonneau',
	'pomme',
	'céleri',
	'poire',
	'betterave',
	'oie',
	'héliotrope',
	'figue',
	'scorsonère',
	'alisier',
	'charrue',
	'salsifis',
	'mâcre',
	'topinambour',
	'endive',
	'dindon',
	'chervis',
	'cresson',
	'dentelaire',
	'grenade',
	'herse',
	'bacchante',
	'azerole',
	'garance',
	'orange',
	'faisan',
	'pistache',
	'macjonc',
	'coing',
	'cormier',
	'rouleau',
	'raiponce',
	'turneps',
	'chicorée',
	'nèfle',
	'cochon',
	'mâche',
	'chou-fleur',
	'miel',
	'genièvre',
	'pioche',
	'cire',
	'raifort',
	'cèdre',
	'sapin',
	'chevreuil',
	'ajonc',
	'cyprès',
	'lierre',
	'sabine',
	'hoyau',
	'érable sucré',
	'bruyère',
	'roseau',
	'oseille',
	'grillon',
	'pignon',
	'liège',
	'truffe',
	'olive',
	'pelle',
	'tourbe',
	'houille',
	'bitume',
	'soufre',
	'chien',
	'lave',
	'terre végétale',
	'fumier',
	'salpêtre',
	'fléau',
	'granit',
	'argile',
	'ardoise',
	'grès',
	'lapin',
	'silex',
	'marne',
	'pierre à chaux',
	'marbre',
	'van',
	'pierre à plâtre',
	'sel',
	'fer',
	'cuivre',
	'chat',
	'étain',
	'plomb',
	'zinc',
	'mercure',
	'crible',
	'lauréole',
	'mousse',
	'fragon',
	'perce-neige',
	'taureau',
	'laurier tin',
	'amadouvier',
	'mézéréon',
	'peuplier',
	'coignée',
	'ellébore',
	'brocoli',
	'laurier',
	'avelinier',
	'vache',
	'buis',
	'lichen',
	'if',
	'pulmonaire',
	'serpette',
	'thlaspi',
	'thimele',
	'chiendent',
	'trainasse',
	'lièvre',
	'guède',
	'noisetier',
	'cyclamen',
	'chélidoine',
	'traîneau',
	'tussilage',
	'cornouiller',
	'violier',
	'troène',
	'bouc',
	'asaret',
	'alaterne',
	'violette',
	'marceau',
	'bêche',
	'narcisse',
	'orme',
	'fumeterre',
	'vélar',
	'chèvre',
	'épinard',
	'doronic',
	'mouron',
	'cerfeuil',
	'cordeau',
	'mandragore',
	'persil',
	'cochléaria',
	'pâquerette',
	'thon',
	'pissenlit',
	'sylvie',
	'capillaire',
	'frêne',
	'plantoir',
	'primevère',
	'platane',
	'asperge',
	'tulipe',
	'poule',
	'bette',
	'bouleau',
	'jonquille',
	'aulne',
	'couvoir',
	'pervenche',
	'charme',
	'morille',
	'hêtre',
	'abeille',
	'laitue',
	'mélèze',
	'ciguë',
	'radis',
	'ruche',
	'gainier',
	'romaine',
	'marronnier',
	'roquette',
	'pigeon',
	'lilas',
	'anémone',
	'pensée',
	'myrtile',
	'greffoir',
	'rose',
	'chêne',
	'fougère',
	'aubépine',
	'rossignol',
	'ancolie',
	'muguet',
	'champignon',
	'hyacinthe',
	'râteau',
	'rhubarbe',
	'sainfoin',
	'bâton-d\'or',
	'chamerops',
	'ver à soie',
	'consoude',
	'pimprenelle',
	'corbeille d\'or',
	'arroche',
	'sarcloir',
	'statice',
	'fritillaire',
	'bourrache',
	'valériane',
	'carpe',
	'fusain',
	'civette',
	'buglosse',
	'sénevé',
	'houlette',
	'luzerne',
	'hémérocalle',
	'trèfle',
	'angélique',
	'canard',
	'mélisse',
	'fromental',
	'lis martagon',
	'serpolet',
	'faux',
	'fraise',
	'bétoine',
	'pois',
	'acacia',
	'caille',
	'œillet',
	'sureau',
	'pavot',
	'tilleul',
	'fourche',
	'barbeau',
	'camomille',
	'chèvrefeuille',
	'caille-lait',
	'tanche',
	'jasmin',
	'verveine',
	'thym',
	'pivoine',
	'chariot',
	'seigle',
	'avoine',
	'oignon',
	'véronique',
	'mulet',
	'romarin',
	'concombre',
	'échalote',
	'absinthe',
	'faucille',
	'coriandre',
	'artichaut',
	'girofle',
	'lavande',
	'chamois',
	'tabac',
	'groseille',
	'gesse',
	'cerise',
	'parc',
	'menthe',
	'cumin',
	'haricot',
	'orcanète',
	'pintade',
	'sauge',
	'ail',
	'vesce',
	'blé',
	'chalemie',
	'épeautre',
	'bouillon-blanc',
	'melon',
	'ivraie',
	'bélier',
	'prêle',
	'armoise',
	'carthame',
	'mûre',
	'arrosoir',
	'panic',
	'salicorne',
	'abricot',
	'basilic',
	'brebis',
	'guimauve',
	'lin',
	'amande',
	'gentiane',
	'écluse',
	'carline',
	'câprier',
	'lentille',
	'aunée',
	'loutre',
	'myrte',
	'colza',
	'lupin',
	'coton',
	'moulin',
	'prune',
	'millet',
	'lycoperdon',
	'escourgeon',
	'saumon',
	'tubéreuse',
	'sucrion',
	'apocyn',
	'réglisse',
	'échelle',
	'pastèque',
	'fenouil',
	'épine vinette',
	'noix',
	'truite',
	'citron',
	'cardère',
	'nerprun',
	'tagette',
	'hotte',
	'églantier',
	'noisette',
	'houblon',
	'sorgho',
	'écrevisse',
	'bigarade',
	'verge d\'or',
	'maïs',
	'marron',
	'panier',
];

var is_year_sextile = function(year) {
	switch (year) {
		case 3:
		case 7:
		case 11:
			return true;
		default:
			return year > 14 && (
					(year % 4 == 0 && (year + 1792) % 100 != 0)
					|| ((year + 1792) % 400 == 0 && (year + 1792) % 4000 != 0)
				);

	}
};

var first_day_of_year = function(year) {
	switch (year) {
		case 4:
		case 8:
			var first_day = 23;
			break;
		case 12:
		case 16:
			var first_day = 24;
			break;
		default:
			var first_day = 24
				- Math.floor((year - 1)/100)
				+ Math.floor((year - 1) / 400)
				+ Math.floor((year - 209) / 100)
				- Math.floor((year - 209) / 400);
			break;
	}

	var date = new Date();
	date.setUTCFullYear(year + 1791);
	date.setUTCMonth(9 - 1);
	date.setUTCDate(first_day);
	date.setUTCHours(0);
	date.setUTCMinutes(0);
	date.setUTCSeconds(0);
	date.setUTCMilliseconds(0);

	return date;
};

var ordinal_string = function(day) {
	return day == 1 ? "1er" : day + "e";
};

var pad_left = function(number) {
	return number < 10 ? "0" + number : "" + number;
};

var FlorealDate = function(arg) {
	this.date = new Date(arg);
	this.reference = new Date('1792-09-22');

	this.revolutionaryTimestamp = this.date - this.reference;
};

FlorealDate.day_names = day_names;
FlorealDate.first_day_of_year = first_day_of_year;

FlorealDate.prototype.yearDecimal = function() {
	var year = this.date.getFullYear() - 1792;
	
	if (this.date.getMonth()+1 > 9) {
		// All years start in september, so any month after that means
		// the year is +1793 instead of +1792
		year += 1;
	} else if (this.date.getMonth()+1 == 9) {
		// Since years can start either on 22, 23 or 24 september, let's
		// check more precisely on which date we are.
		if (this.date.getDate() >= 22 && this.date >= first_day_of_year(year+1)) {
			// If this date is at least equal to the first day of
			// year+1, obviously this year is year+1
			year += 1;
		}
	}

	// There is no year 0
	if (year <= 0) {
		year -= 1;
	}

	return year;
};

FlorealDate.prototype.year = function() {
	var decimal = this.yearDecimal();

	// Roman numerals cannot be negative, and years before an I are simply
	// not supposed to be displayed using the revolutionary calendar.
	// Let's just prepend a - to the roman value.
	if (decimal < 0) {
		return '-' + roman.toRoman(-1 * this.yearDecimal());
	} else {
		return roman.toRoman(this.yearDecimal());
	}
};

FlorealDate.prototype.isYearSextile = function() {
	return is_year_sextile(this.yearDecimal());
};

FlorealDate.prototype.firstDayOfYear = function() {
	return first_day_of_year(this.yearDecimal());
};

FlorealDate.prototype.dayOfYear = function() {
	var seconds = ((+this.date) - (+this.firstDayOfYear())) / 1000;

	return Math.floor(seconds / (3600 * 24)) + 1;
};

FlorealDate.prototype.month = function() {
	return Math.floor(this.dayOfYear() / 30 + 1);
};

FlorealDate.prototype.isComplementaryDay = function() {
	return this.month() == 13;
};

FlorealDate.prototype.monthName = function() {
	switch (this.month()) {
		case 1:  return "vendémiaire";
		case 2:  return "brumaire";
		case 3:  return "frimaire";
		case 4:  return "nivôse";
		case 5:  return "pluviôse";
		case 6:  return "ventôse";
		case 7:  return "germinal";
		case 8:  return "floréal";
		case 9:  return "prairial";
		case 10: return "messidor";
		case 11: return "thermidor";
		case 12: return "fructidor";

			// Jours complémentaires
		default: return "";

	}
};

FlorealDate.prototype.dayOfMonth = function() {
	return ((this.dayOfYear() - 1) % 30) + 1;
};
FlorealDate.prototype.day = FlorealDate.prototype.dayOfMonth;

FlorealDate.prototype.dayOfDecade = function() {
	return Math.floor((this.day() - 1) % 10) + 1;
};
FlorealDate.prototype.dayOfWeek = FlorealDate.prototype.dayOfDecade;

FlorealDate.prototype.dayName = function() {
	if (!this.isComplementaryDay()) switch (this.dayOfDecade()) {
		case 1: return "primidi";
		case 2: return "duodi";
		case 3: return "tridi";
		case 4: return "quartidi";
		case 5: return "quintidi";
		case 6: return "sextidi";
		case 7: return "septidi";
		case 8: return "octidi";
		case 9: return "nonidi";
		case 10: return "décadi";
	} else switch (this.dayOfDecade()) {
		case 1: return "jour de la vertu";
		case 2: return "jour du génie";
		case 3: return "jour du travail";
		case 4: return "jour de l'opinion";
		case 5: return "jour des récompenses";
		case 6: return "jour de la révolution";
	}
};

FlorealDate.prototype.dayTitle = function() {
	if (!this.isComplementaryDay()) {
		return day_names[this.dayOfYear()];
	} else switch (this.dayOfDecade()) {
		case 1: return "vertu";
		case 2: return "génie";
		case 3: return "travail";
		case 4: return "opinion";
		case 5: return "récompenses";
		case 6: return "révolution";
	}
};

FlorealDate.prototype.decade = function() {
	return Math.floor((this.day()-1)/10) + 1;
};


FlorealDate.prototype.toFullDateString = function() {
	var day = this.day();

	if (this.isComplementaryDay()) {
		return ordinal_string(day) + " jour complémentaire, an " + this.year();
	} else {
		var day_string = day == 1 ? '1er' : day;
		return day_string + " " + this.monthName() + ", an " + this.year();
	}
};

// Short format was not used, I define it as:
// DD-MM-YYY
// DD being the day number, between 01 and 30
// MM the month number, between 01 and 13 (13 being the number for complementary days)
// YYY the year number, in roman numerals
FlorealDate.prototype.toShortDateString = function() {
	return pad_left(this.day()) + "-" + pad_left(this.month()) + "-" + this.year();
};
FlorealDate.prototype.toDateString = FlorealDate.prototype.toShortDateString;

FlorealDate.prototype.toString = FlorealDate.prototype.toFullDateString;

module.exports = FlorealDate;

