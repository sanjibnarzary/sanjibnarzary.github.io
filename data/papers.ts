export type PaperType = "conference" | "journal" | "preprint";

export type Paper = {
	id: string;
	type: PaperType;
	authors: string[]; // "Last, First" format
	title: string;
	venue: string;
	year: number;
	volume?: string;
	number?: string;
	pages?: string;
	publisher?: string;
	url?: string;
};

export const papers: Paper[] = [
	{
		id: "narzary2025pivot",
		type: "journal",
		authors: ["Narzary, Sanjib", "Nandi, Sukumar", "Som, Bidisha"],
		title: "Dynamic model selection for enhanced pivot-based neural machine translation",
		venue: "Neural Computing and Applications",
		volume: "37",
		number: "20",
		pages: "15095-15104",
		year: 2025,
		publisher: "Springer London, London",
	},
	{
		id: "narzary2025bpe",
		type: "journal",
		authors: ["Narzary, Sanjib", "Brahma, Maharaj", "Nandi, Sukumar", "Som, Bidisha"],
		title:
			"BPE and morphologically segmented phrase based statistical machine translation system for Indian languages to resource constrained language Bodo",
		venue: "Multimedia Tools and Applications",
		volume: "84",
		number: "25",
		pages: "29715-29732",
		year: 2025,
		publisher: "Springer US, New York",
	},
	{
		id: "pathak2025pos",
		type: "journal",
		authors: ["Pathak, Dhrubajyoti", "Narzary, Sanjib", "Nandi, Sukumar", "Som, Bidisha"],
		title: "Part-of-speech tagger for Bodo language using deep learning approach",
		venue: "Natural Language Processing",
		volume: "31",
		number: "2",
		pages: "215-229",
		year: 2025,
		publisher: "Cambridge University Press",
	},
	{
		id: "narzary2025gemini",
		type: "preprint",
		authors: [
			"Narzary, Sanjib",
			"Brahma, Bihung",
			"Mahilary, Haradip",
			"Brahma, Mahananda",
			"Som, Bidisha",
			"Nandi, Sukumar",
		],
		title:
			"Comparative study of zero-shot cross-lingual transfer for Bodo POS and NER tagging using Gemini 2.0 Flash Thinking Experimental model",
		venue: "arXiv preprint arXiv:2503.04405",
		year: 2025,
		url: "https://arxiv.org/abs/2503.04405",
	},
	{
		id: "narzary2024ner",
		type: "journal",
		authors: ["Narzary, Sanjib", "Brahma, Anjali", "Nandi, Sukumar", "Som, Bidisha"],
		title: "Deep learning based named entity recognition for the Bodo language",
		venue: "Procedia Computer Science",
		volume: "235",
		pages: "2405-2421",
		year: 2024,
		publisher: "Elsevier",
	},
	{
		id: "narzary2022keep",
		type: "conference",
		authors: [
			"Narzary, Sanjib",
			"Brahma, Maharaj",
			"Narzary, Mwnthai",
			"Muchahary, Gwmsrang",
			"Singh, Pranav Kumar",
			"Senapati, Apurbalal",
			"Nandi, Sukumar",
			"Som, Bidisha",
		],
		title: "Generating monolingual dataset for low resource language Bodo from old books using Google Keep",
		venue: "Proceedings of the Thirteenth Language Resources and Evaluation Conference",
		pages: "6563-6570",
		year: 2022,
	},
	{
		id: "narzary2022tonal",
		type: "conference",
		authors: [
			"Narzary, Mwnthai",
			"Brahma, Maharaj",
			"Narzary, Sanjib",
			"Senapati, Apurbalal",
			"Singh, Pranav Kumar",
		],
		title: "A Computational Approach for the Tonal Identification in Bodo Language",
		venue: "North-East Research Conclave",
		pages: "19-32",
		year: 2022,
		publisher: "Springer Nature Singapore, Singapore",
	},
	{
		id: "narzary2021resources",
		type: "conference",
		authors: [
			"Narzary, Mwnthai",
			"Muchahary, Gwmsrang",
			"Brahma, Maharaj",
			"Narzary, Sanjib",
			"Singh, Pranav Kumar",
			"Senapati, Apurbalal",
		],
		title: "Bodo resources for NLP: An overview of existing primary resources for Bodo",
		venue: "AIJR Proceedings",
		pages: "96-101",
		year: 2021,
		publisher: "AIJR Publisher",
	},
	{
		id: "narzary2019nmt",
		type: "conference",
		authors: [
			"Narzary, S.",
			"Brahma, M.",
			"Sinha, B.",
			"Brahma, R.",
			"Dibragede, B.",
			"Barman, S.",
			"Nandi, S.",
			"Som, B.",
		],
		title: "Attention based English-Bodo Neural Machine Translation System for Tourism Domain",
		venue: "International Conference on Computing Methodologies and Communication (ICCMC)",
		year: 2019,
	},
];
