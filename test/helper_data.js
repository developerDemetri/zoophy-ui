'use strict';

const SQL_RECORD = {
    "accession": "CY215262",
    "sequence": {
        "accession": "CY215262",
        "definition": "Influenza A virus (A/Maryland/02/2017(H1N1)) nuclear export protein (NEP) and nonstructural protein 1 (NS1) genes, complete cds.",
        "taxID": 1948908,
        "organism": "Influenza A virus (A/Maryland/02/2017(H1N1)) Viruses; ssRNA viruses; ssRNA negative-strand viruses; Orthomyxoviridae; Influenzavirus A.",
        "isolate": null,
        "strain": "A/Maryland/02/2017",
        "collectionDate": "04-Jan-2017",
        "comment": "##FluData-START##EPI_ISOLATE_ID   :: EPI_ISL_244237NAME             :: A/Maryland/02/2017TYPE             :: H1N1Segment_name     :: NSHOST_AGE         :: 3HOST_GENDER      :: MPASSAGE          :: OriginalLOCATION         :: United States / MarylandCOLLECT_DATE     :: 04-Jan-2017Lineage          :: A(H1N1)pdm09SPECIMEN_ID      :: A17001363 ORIGINALSENDER_LAB       :: Maryland Department of Health and MentalHygieneSEQLAB_SAMPLE_ID :: 3025628289EPI_SEQUENCE_ID  :: EPI894229##FluData-END##",
        "rawSequence": "gtgacaaaaacataatggaatccaacaccatgtcaagctttcaggtagactgttttctttggcatattcgcaagcgatttgcagacaatggattgggtgatgccccattccttgatcggctacgccgagatcaaaagtccttaaaaggaagaggcaacacccttggactcgacatcaaaacagccactcttgttgggaaacaaattgtggaatggattttgaaagaggaatccagcgagacacttagaatgacaattgcatctgtacctacttcgcgttacatttctgacatgaccctcgaggaaatgtcacgagactggttcatgcttatgcctaggcaaaaaataataggccctctttgcgtgcgattggaccaggcggtcatggataagaacatagtactggaagcaaacttcagtgtaatcttcaaccgattagagaccttgatactactaagggctttcactgaggagggagcaatagttggagaaatttcaccattaccttctcttccaggacatacttatgaggatgtcaaaaatgcagttggggtcctcatcggaggacttgagtggaatggtaacacggttcgagtctctgaaaatatacagagattcgcttggagaagctgtgatgagaatgggagaccttcactacctccagagcagaaatgagaagtggcgggaacaattgggacagaaatttgaggaaataaggtggctaattgaagaaatacggcacagattgaaagcgacagagaatagtttcgaacaaataacatttatgcaagccttacaactactgcttgaagtagagcaagagataagagctttctcgtttcagcttatttaatgataaaaaacac",
        "segmentLength": 865,
        "isPH1N1": false
    },
    "genes": [{
        "accession": "CY215262",
        "name": "NS"
    }],
    "host": {
        "accession": "CY215262",
        "name": "Homo sapiens; gender M; age 3",
        "taxon": 9606
    },
    "geonameLocation": {
        "geonameID": 4361885,
        "accession": "CY215262",
        "location": "maryland,US",
        "latitude": 39.000389,
        "longitude": -76.749969,
        "geonameType": "ADM1",
        "country": "United States"
    },
    "publication": null
};

const LUCENE_RECORD = {
    "accession": "CY214007",
    "sequence": {
        "accession": "CY214007",
        "definition": "Influenza A virus (A/Wisconsin/03/2017(H3N2)) polymerase PB2 (PB2) gene, complete cds.",
        "taxID": 1940393,
        "organism": "Influenza A virus (A/Wisconsin/03/2017(H3N2)) Viruses; ssRNA viruses; ssRNA negative-strand viruses; Orthomyxoviridae; Influenzavirus A.",
        "isolate": null,
        "strain": "A/Wisconsin/03/2017",
        "collectionDate": "20170103",
        "comment": null,
        "rawSequence": null,
        "segmentLength": 2316,
        "isPH1N1": false
    },
    "genes": [{
        "accession": "CY214007",
        "name": "PB2"
    }],
    "host": {
        "accession": "CY214007",
        "name": "homo sapiens; gender f; age 76",
        "taxon": 9606
    },
    "geonameLocation": {
        "geonameID": 5279468,
        "accession": "CY214007",
        "location": "Wisconsin",
        "latitude": 44.50024,
        "longitude": -90.00041,
        "geonameType": "ADM1",
        "country": "United States"
    },
    "publication": null
};

const PREDICTOR = {
    state: 'az ',
    name: ' SampleSize',
    value: ' 44 ',
    year: '2007'
};

const ACCESSION_LIST = [
    'GQ132157',
    'GQ132159',
    'FJ998215',
    'GQ132154',
    'FJ998213',
    'GQ465702',
    'GQ465698',
    'GQ402240',
    'GQ465707',
    'GQ402241',
    'GQ465706',
    'GQ465699',
    'GQ402237',
    'GQ465703',
    'GQ402244',
    'GQ402246',
    'GQ402242',
    'GQ465700',
    'GQ465697',
    'GQ402243',
    'GQ465696',
    'GQ465705',
    'GQ402227',
    'GQ465704',
    'GQ402235',
    'GQ132156',
    'GQ132158',
    'GQ402234',
    'GQ465701',
    'GQ402239',
    'GQ402238',
    'GQ402236',
    'GQ402245',
    'CY045932',
    'CY045940',
    'JQ964683',
    'GQ411899',
    'CY060752',
    'CY045948',
    'CY060704',
    'CY060584',
    'JN632581',
    'CY045964',
    'CY060712',
    'CY076781',
    'CY060608',
    'CY060576',
    'CY076789',
    'CY076765',
    'CY081063',
    'CY045956',
    'CY060624',
    'CY060536',
    'GQ385302',
    'CY045972',
    'CY060680',
    'CY060592',
    'CY060744',
    'KC456604',
    'KC456605',
    'CY060640',
    'CY060616',
    'CY060664',
    'CY060568',
    'CY060672',
    'CY060528',
    'GQ373263',
    'CY081103',
    'CY060512',
    'CY045980',
    'CY060560',
    'CY060552',
    'CY081087',
    'CY081095',
    'CY060720',
    'CY060504',
    'CY081079',
    'CY060656',
    'GQ502908',
    'CY060632',
    'CY060648',
    'CY076773',
    'CY060520',
    'CY076797',
    'CY060600',
    'CY060696',
    'CY076757',
    'CY081071',
    'CY060544',
    'CY060736',
    'CY060696',
    'CY060728'
];

const DOWNLOAD_ACCESSION = [
    { "id": "CY214007",  "resourceSource": 1},
    { "id": "CY060696",  "resourceSource": 1},
    { "id": "CY214007",  "resourceSource": 1},
    { "id": "CY060696",  "resourceSource": 1},
    { "id": "CY214007",  "resourceSource": 1},
    { "id": "CY060728",  "resourceSource": 1}

];

const BAD_GENBANK_ACCESSION = {
    "id": "GQ/*rm**/0", "collectionDate": null, "geonameID": null, 
    "rawSequence": null, "resourceSource": 1
};

const DOWNLOAD_COLUMNS = [
    'Genes',
    'VirusID',
    'Virus',
    'Human_Date',
    'HostID',
    'Host',
    'Country',
    'State',
    'GeonameID',
    'Length'
];

const CANADA_PREDICTORS = {
    "manitoba" : [
        {"state": "manitoba", "name": "lat", "value": 55.000191, "year": null},
        {"state": "manitoba", "name": "long", "value": -97.000488, "year": null},
        {"state": "manitoba", "name": "sampleSize", "value": 8, "year": null}
    ],
    "saskatchewan": [
        {"state": "saskatchewan", "name": "lat", "value": 54.000099, "year": null},
        {"state": "saskatchewan", "name": "long", "value": -106.00099, "year": null},
        {"state": "saskatchewan", "name": "sampleSize", "value": 7, "year": null}
    ],
    "ontario" : [
        {"state": "ontario", "name": "lat", "value": 49.250141, "year": null},
        {"state": "ontario", "name": "long", "value": -84.499832, "year": null},
        {"state": "ontario", "name": "sampleSize", "value": 63, "year": null}
    ],
    "nova-scotia": [
        {"state": "nova-scotia", "name": "lat", "value": 45.000149, "year": null},
        {"state": "nova-scotia", "name": "long", "value": -62.99865, "year": null},
        {"state": "nova-scotia", "name": "sampleSize", "value": 6, "year": null}
    ],
    "quebec": [
        {"state": "quebec", "name": "lat", "value": 52.000172, "year": null},
        {"state": "quebec", "name": "long", "value": -71.999069, "year": null},
        {"state": "quebec", "name": "sampleSize", "value": 5, "year": null}
    ],
    "alberta": [
        {"state": "alberta", "name": "lat", "value": 52.283329, "year": null},
        {"state": "alberta", "name": "long", "value": -117.469, "year": null},
        {"state": "alberta", "name": "sampleSize", "value": 3, "year": null}
    ]
};

const XML_OPTIONS = {
    substitutionModel:"HKY",
    gamma:false,
    invariantSites:false,
    clockModel :"Strict",
    treePrior:"Constant",
    chainLength:10000000,
    subSampleRate:1000,
    geospatialUncertainties:false,
    disjoinerLevel:'Auto'
};

const JOBSEQUENCE_GENBANK_LIST = [{
    "id": "CY214007", "collectionDate": null, "geonameID": null, 
    "rawSequence": null, "resourceSource": 1
},
{
    "id": "CY060544", "collectionDate": null, "geonameID": null,
    "rawSequence": null, "resourceSource": 1
},
{
    "id": "CY060688","collectionDate": null, "geonameID": null,
    "rawSequence": null, "resourceSource": 1
},
{
    "id": "JN632581","collectionDate": null, "geonameID": null,
    "rawSequence": null, "resourceSource": 1
},
{
    "id": "KC456604","collectionDate": null, "geonameID": null,
    "rawSequence": null, "resourceSource": 1
},
{
    "id": "GQ385302","collectionDate": null, "geonameID": null,
    "rawSequence": null, "resourceSource": 1
}];


const JOBSEQUENCE_FASTA_LIST = [{
    "id": "EPI_ISL_116928", "collectionDate": "25-Mar-2006", "geonameID": "5308655", 
    "rawSequence": "ATGGAGAAAATAGTGCTTCTTTTTGCAATAGTCAGTCTTGTTAAAAGTGATCAGATTTGCATTGGTTACCATGCAAACAACTCGACAGAGCAGGTTGACACAATAATGGAAAGGAACGTTACTGTTACACATGCCCAAGACATACTGGAAAAGACACACAACGGGAAGCTCTGCGATCTAGATGGAGTGAAGCCTCTAATTTTGAGAGACTGTAGTGTAGCTGGATGGCTCCTCGGAAACCCAATGTGTGACGAATTCATTAATGTGCCGGAATGGTCTTACATAGTGGAGAAGGCCAATCCAGTCAATGACCTCTGTTACCCAGGGGATTTCAATGACTATGAAGAATTGAAACACCTATTGAGCAGAATAAACCATTTTGAGAAAATTCAGATCATCCCTAAAAGTTCTTGGTCCAGTCATGAAGCCTCATTAGGGGTGAGCTCAGCATGTCCATACCTGGGAAAGTCCTCCTTTTTCAGAAATGTGGTATGGCTTATCAAAAAGAACAGTACATACCCAACAATAAAGAGGAGCTACAATAATACCAACCAAGAAGATCTTTTGGTACTGTGGGGGATTCACCATCCTAATGATGCGGCAGAGCAGACAAAGCTCTATCAAAACCCAACCACCTATATTTCTGTTGGGACATCAACACTAAACCAGAGATTGGTACCAAGAATAGCTACTAGATCCAAAGTAAACGGGCAAAGTGGAAGGATGGAGTTCTTCTGGACAATTTTAAAACCGAATGATGCAATCAACTTCGAGAGTAATGGAAATTTCATTGCTCCAGAATATGCATACAAAATTGTCAAGAAAGGGGACTCAACAATTATGAAAAGTGAATTGGAATATGGTAACTGCAACACCAAGTGTCAAACTCCAATGGGGGCGATAAACTCTAGTATGCCATTCCACAATATACACCCTCTCACTATCGGGGAATGCCCCAAATATGTGAAATCAAACAGATTAGTCCTTGCGACTGGGCTCAGAAATAGCCCTCAAAGAGAGAGAAGAAGAAAAAAGAGAGGATTATTTGGAGCTATAGCAGGTTTTATAGAGGGAGGATGGCAGGGAATGGTAGATGGTTGGTATGGGTACCACCATAGCAATGAGCAGGGGAGTGGGTACGCTGCAGACAAAGAATCCACTCAAAAGGCAATAGATGGAGTCACCAATAAGGTCAACTCGATAATTGACAAAATGAACACTCAGTTTGAGGCCGTTGGAAGGGAATTTAACAACTTAGAAAGGAGAATAGAGAATTTAAACAAGAAGATGGAAGACGGGTTCCTAGATGTCTGGACTTATAATGCTGAACTTCTGGTTCTCATGGAAAATGAGAGAACCCTAGACTTTCATGACTCAAATGTCAAGAACCTTTACGACAAGGTCCGACTACAGCTTAGGGATAATGCAAAGGAGCTGGGTAACGGTTGTTTCGAGTTCTATCATAAGTGTGATAATGAATGTATGGAAAGTGTGAGAAACGGAACGTATGACTACCCGCAGTATTCAGAAGAAGCAAGACTAAAAAGAGAGGAAATAAGTGGAGTAAAATTGGAATCAATAGGAATTTACCAAATACTGTCAATTTATTCTACAGTGGCGAGTTCCCTAGCACTGGCAATCATGGTAGCTGGTCTATCCTTATGGATGTGCTCCAATGGGTCGTTACAATGCAGAATTTGCATTTAAATTTGTGAGTTCAGATTGAG", 
    "resourceSource": 2
},
{
    "id": "EPI_ISL_116926", "collectionDate": "04-Jan-2008", "geonameID": "5317058",
    "rawSequence": "ATGGAGAAAATAGTGCTTCTTTTTGCAATAGTCAGTCTTGTAAAAGTGATCAGATTTGCATTGGTTACCATGCAAACAACTCGACAGAGCAGGTTGACACAATAATGGAAAAGAACGTTACTGTTACACATGCCCAAGACATACTGGAAAAGACACACAACGGGAAGCTCTGCGATCTAGATGGAGTGAAGCCTCTAATTTTGAGAGATTGTAGTGTAGCTGGATGGCTCCTCGGAAACCCAATGTGTGACGAATTCATCAATGTGCCGGAATGGTCTTACATAGTGGAGAAGGCCAATCCAGTCAATGACCTCTGTTACCCAGGGGATTTCAATGACTATGAAGAATTGAAACACCTATTGAGCAGAATAAACCATTTTGAGAAAATTCAGATCATCCCCAAAAGTTCTTGGTCCAGTCATGAAGCCTCATTAGGGGTGAGCTCAGCATGTCCATACCAGGGAAAGTCCTCCTTTTTCAGAAATGTGGTATGGCTTATCAAAAAGAACAGTACATACCCAACAATAAAGAGGAGCTACAATAATACCAACCAAGAAGATCTTTTGGTACTGTGGGGGATTCACCATCCTAATGATGCGGCAGAGCAGACAAAGCTCTATCAAAACCCAACCACCTATATTTCCGTTGGGACATCAACACTAAACCAGAGATTGGTACCAAGAATAGCTACTAGATCCAAAGTAAACGGGCAAAGTGGAAGGATGGAGTTCTTCTGGACAATTTTAAAACCGAATGATGCAATCAACTTCGAGAGTAATGGAAATTTCATTGCTCCAGAATATGCATACAAAATTGTCAAGAAAGGGGACTCAACAATTATGAAAAGTGAATTGGAATATGGTAACTGCAACACCAAGTGTCAAACTCCAATGGGGGCGATAAACTCTAGTATGCCATTCCACAACATACACCCTCTCACCATCGGGGAATGCCCCAAATATGTGAAATCAAACAGATTAGTCCTTGCGACTGGGCTCAGAAATAGCCCTCAAAGAGAGAGAAGAAGAAAAAAGAGAGGATTATTTGGAGCTATAGCAGGTTTTATAGAGGGAGGATGGCAGGGAATGGTAGATGGTTGGTATGGATACCACCATAGCAATGAGCAGGGGAGTGGGTACGCTGCAGACAAAGAATCCACTCAAAAGGCAATAGATGGAGTCACCAATAAGGTCAACTCGATCATTGACAAAATGAACACTCAGTTTGAGGCCGTTGGAAGGGAATTTAACAACTTAGAAAGGAGAATAGAGAATTTAAACAAGAAGATGGAAGACGGGTTCCTAGATGTCTGGACTTATAATGCTGAACTTCTGGTTCTCATGGAAAATGAGAGAACTCTAGACTTTCATGACTCAAATGTCAAGAACCTTTACGACAAGGTCCGATTACAGCTTAGGGATAATGCAAAGGAGCTGGGTAACGGTTGTTTCGAGTTCTATCATAAATGTGATAATGAATGTATGGAAAGTGTAAGAAACGGAACGTATGACTACCCGCAGTATTCAGAAGAAGCAAGACTAAAAAGAGAGGAAATAAGTGGAGTAAAATTGGAATCAATAGGAATTTACCAAATACTGTCAATTTATTCTACAGTGGCGAGCTCCCTAGCACTGGCAATCATGGTAGCTGGTCTATCCTTATGGATGTGCTCCAATGGGTCGTTACAATGCAGAATTTGCATTTAAATTTGTGAGTTCAGATTGTAGGTTAAAAAAC", 
    "resourceSource": 2
},
{
    "id": "EPI_ISL_110901","collectionDate": "12-May-2007", "geonameID": "8506558",
    "rawSequence": "ATGGAGAAAAGAGTGCTTCTTTTTGCAATAGTCAGTCTTGGTAAAAGTGTTCAGATGTGCATTGGTTACCATGCAAACAACTCGACAGAGCAGGTTGACACAATAATGGAAAAGAACGTTACTGTTACACATGCCCAAGACATACTGGAAAAGACACACAACGGGAAGCTCTGCGATCTAGATGGAGTGAAGCCTCTAATTTTGAGAGATTGTAGTGTAGCTGGATGGCTCCTCGGAAACCCAATGTGTGACGAATTCATCAATGTGCCGGAATGGTCTTACATAGTGGAGAAGGCCAATCCAGTCAATGACCTCTGTTACCCAGGGGATTTCAATGACTATGAAGAATTGAAACACCTATTGAGCAGAATAAACCATTTTGAGAAAATTCAGATCATCCCCAAAAGTTCTTGGTCCAGTCATGAAGCCTCATTAGGGGTGAGCTCAGCATGTCCATACCAGGGAAAGTCCTCCTTTTTCAGAAATGTGGTATGGCTTATCAAAAAGAACAGTACATACCCAACAATAAAGAGGAGCTACAATAATACCAACCAAGAAGATCTTTTGGTACTGTGGGGGATTCACCATCCTAATGATGCGGCAGAGCAGACAAAGCTCTATCAAAACCCAACCACCTATATTTCCGTTGGGACATCAACACTAAACCAGAGATTGGTACCAAGAATAGCTACTAGATCCAAAGTAAACGGGCAAAGTGGAAGGATGGAGTTCTTCTGGACAATTTTAAAACCGAATGATGCAATCAACTTCGAGAGTAATGGAAATTTCATTGCTCCAGAATATGCATACAAAATTGTCAAGAAAGGGGACTCAACAATTATGAAAAGTGAATTGGAATATGGTAACTGCAACACCAAGTGTCAAACTCCAATGGGGGCGATAAACTCTAGTATGCCATTCCACAACATACACCCTCTCACCATCGGGGAATGCCCCAAATATGTGAAATCAAACAGATTAGTCCTTGCGACTGGGCTCAGAAATAGCCCTCAAAGAGAGAGAAGAAGAAAAAAGAGAGGATTATTTGGAGCTATAGCAGGTTTTATAGAGGGAGGATGGCAGGGAATGGTAGATGGTTGGTATGGATACCACCATAGCAATGAGCAGGGGAGTGGGTACGCTGCAGACAAAGAATCCACTCAAAAGGCAATAGATGGAGTCACCAATAAGGTCAACTCGATCATTGACAAAATGAACACTCAGTTTGAGGCCGTTGGAAGGGAATTTAACAACTTAGAAAGGAGAATAGAGAATTTAAACAAGAAGATGGAAGACGGGTTCCTAGATGTCTGGACTTATAATGCTGAACTTCTGGTTCTCATGGAAAATGAGAGAACTCTAGACTTTCATGACTCAAATGTCAAGAACCTTTACGACAAGGTCCGATTACAGCTTAGGGATAATGCAAAGGAGCTGGGTAACGGTTGTTTCGAGTTCTATCATAAATGTGATAATGAATGTATGGAAAGTGTAAGAAACGGAACGTATGACTACCCGCAGTATTCAGAAGAAGCAAGACTAAAAAGAGAGGAAATAAGTGGAGTAAAATTGGAATCAATAGGAATTTACCAAATACTGTCAATTTATTCTACAGTGGCGAGCTCCCTAGCACTGGCAATCATGGTAGCTGGTCTATCCTTATGGATGTGCTCCAATGGGTCGTTACAATGCAGAATTTGCATTTAAATTTGTGAGTTCAGATTGAG", 
    "resourceSource": 2
},
{
    "id": "EPI_ISL_150187","collectionDate": "02-Sep-2004", "geonameID": "8900568",
    "rawSequence": "AGCAAAAGCAGGGGTTCAATCTGTCAAAATGGAGAAAATAGTGCTTCTTTTTGCAATAGTCAGTCTTGTTAAAAGTGATCAGATTTGCATTGGTTACCATGCAAACAACTCGACAGAGCAGGTTGACACAATAATGGAAAAGAACGTTACTGTTACACATGCCCAAGACATACTGGAAAAGACACACAACGGGAAGCTCTGCGATCTAGATGGAGTGAAGCCTCTAATTTTGAGAGATTGTAGTGTAGCTGGATGGCTCCTCGGAAACCCAATGTGTGACGAATTCATCAATGTGCCGGAATGGTCCTACATAGTGGAGAAGGCCAATCCAGTCAATGACCTCTGTTACCCAGGGGATTTCAATGACTATGAAGAATTGAAACACCTATTGAGCAGAATAAACCATTTTGAGAAAATTCAGATCATCCCCAAAAGTTCTTGGTCCAGTCATGAAGCCTCATTAGGGGTGAGCTCAGCATGTCCATACCAGGGAAAGTCCTCCTTTTTCAGAAATGTGGTATGGCTTATCAAAAAGAACAGTACATACCCAACAATAAAGAGGAGCTACAATAATACCAACCAAGAAGATCTTTTGGTACTGTGGGGGATTCACCATCCTAATGATGCGGCAGAGCAGACAAAGCTCTATCAAAACCCAACCACCTATATTTCCGTTGGGACATCAACACTAAACCAGAGATTGGTACCAAGAATAGCTACTAGATCCGAAGTAAACGGGCAAAGTGGAAGGATGGAGTTCTTCTGGACAATTTTAAAACCGAATGATGCAATCAACTTCGAGAGTAATGGAAATTTCATTGCTCCAGAATATGCATACAAAATTGTCAAGAAAGGGGACTCAACAATTATGAAAAGTGAATTGGAATATGGTAACTGCAACACCAAGTGTCAAACTCCAATGGGGGCGATAAACTCTAGTATGCCATTCCACAATATACACCCTCTCACCATCGGGGAATGCCCCAAATATGTGAAATCAAACAGATTAGTCCTTGCGACTGGGCTCAGAAATAGCCCTCAAAGAGAGAGAAGAAGAAAAAAGAGAGGATTATTTGGAGCTATAGCAGGTTTTATAGAGGGAGGATGGCAGGGAATGGTAGATGGTTGGTATGGGTACCACCATAGCAATGAGCAGGGGAGTGGGTACGCTGCAGACAAAGAATCCACTCAAAAGGCAATAGATGGAGTCACCAATAAGGTCAACTCGATCATTGACAAAATGAACACTCAGTTTGAGGCCGTTGGAAGGGAATTTAACAACTTAGAAAGGAGAATAGAGAATTTAAACAAGAAGATGGAAGACGGGTTCCTAGATGTCTGGACTTATAATGCTGAACTTCTGGTTCTCATGGAAAATGAGAGAACTCTAGACTTTCATGACTCAAATGTCAAGAACCTTTACGACAAGGTCCGACTACAGCTTAGGGATAATGCAAAGGAACTGGGTAACGGTTGTTTCGAGTTCTATCATAAATGTGATAATGAATGTATGGAAAGTGTAAGAAACGGAACGTATGACTACCCGCAGTATTCAGAAGAAGCAAGACTAAAAAGAGAGGAAATAAGTGGAGTAAAATTGGAATCAATAGGAATTTACCAAATACTGTCAATTTATTCTACAGTGGCGAGTTCCCTAGCACTGGCAATCATGGTAGCTGGTCTATCCTTATGGATGTGCTCCAATGGGTCGTTACAATGCAGAATTTGCATTTAAATTTGTGAGTTCAGATTGTAGTTAAAAACACCCTTGTTTCTACT", 
    "resourceSource": 2
},
{
    "id": "EPI_ISL_116901","collectionDate": "24-Dec-2005", "geonameID": "9880849",
    "rawSequence": "ATGGAGAAAATAGTGCTTCTTTTTGCAATAGTCAGTCTTGTTAAAAGTGATCAGATGTGCATTGGTTACCATGCAAACAACTCGACAGAGCAGGTTGACACAATAATGGAAAAGAACGTTACTGTTACACATGCCCAAGACATACTGGAAAAGACACACAACGGGAAGCTCTGCGATCTAGATGGAGTGAAGCCTCTAATTTTGAGAGATTGTAGTGTAGCTGGATGGCTCCTCGGAAACCCAATGTGTGACGAATTCATCAATGTGCCGGAATGGTCTTACATAGTGGAGAAGGCCAATCCAGTCAATGACCTCTGTTACCCAGGGGATTTCAATGACTATGAAGAATTGAAACACCTATTGAGCAGAATAAACCATTTTGAGAAAATTCAGATCATCCCCAAAAGTTCTTGGTCCAGTCATGAAGCCTCATTAGGGGTGAGCTCAGCATGTCCATACCAGGGAAAGTCCTCCTTTTTCAGAAATGTGGTATGGCTTATCAAAAAGAACAGTACATACCCAACAATAAAGAGGAGCTACAATAATACCAACCAAGAAGATCTTTTGGTACTGTGGGGGATTCACCATCCTAATGATGCGGCAGAGCAGACAAAGCTCTATCAAAACCCAACCACCTATATTTCCGTTGGGACATCAACACTAAACCAGAGATTGGTACCAAGAATAGCTACTAGATCCAAAGTAAACGGGCAAAGTGGAAGGATGGAGTTCTTCTGGACAATTTTAAAACCGAATGATGCAATCAACTTCGAGAGTAATGGAAATTTCATTGCTCCAGAATATGCATACAAAATTGTCAAGAAAGGGGACTCAACAATTATGAAAAGTGAATTGGAATATGGTAACTGCAACACCAAGTGTCAAACTCCAATGGGGGCGATAAACTCTAGTATGCCATTCCACAACATACACCCTCTCACCATCGGGGAATGCCCCAAATATGTGAAATCAAACAGATTAGTCCTTGCGACTGGGCTCAGAAATAGCCCTCAAAGAGAGAGAAGAAGAAAAAAGAGAGGATTATTTGGAGCTATAGCAGGTTTTATAGAGGGAGGATGGCAGGGAATGGTAGATGGTTGGTATGGATACCACCATAGCAATGAGCAGGGGAGTGGGTACGCTGCAGACAAAGAATCCACTCAAAAGGCAATAGATGGAGTCACCAATAAGGTCAACTCGATCATTGACAAAATGAACACTCAGTTTGAGGCCGTTGGAAGGGAATTTAACAACTTAGAAAGGAGAATAGAGAATTTAAACAAGAAGATGGAAGACGGGTTCCTAGATGTCTGGACTTATAATGCTGAACTTCTGGTTCTCATGGAAAATGAGAGAACTCTAGACTTTCATGACTCAAATGTCAAGAACCTTTACGACAAGGTCCGATTACAGCTTAGGGATAATGCAAAGGAGCTGGGTAACGGTTGTTTCGAGTTCTATCATAAATGTGATAATGAATGTATGGAAAGTGTAAGAAACGGAACGTATGACTACCCGCAGTATTCAGAAGAAGCAAGACTAAAAAGAGAGGAAATAAGTGGAGTAAAATTGGAATCAATAGGAATTTACCAAATACTGTCAATTTATTCTACAGTGGCGAGCTCCCTAGCACTGGCAATCATGGTAGCTGGTCTATCCTTATGGATGTGCTCCAATGGGTCGTTACAATGCAGAATTTGCATTTAAATTTGTGAGTTCAGATTGAG", 
    "resourceSource": 2
},
{
    "id": "EPI_ISL_190187","collectionDate": "01-Jan-2003", "geonameID": "8041603",
    "rawSequence": "AGCAAAAGCAGGGGTTCAATCTGTCAAAATGGAGAAAATAGTGCTTCTTTTTGCAATAGTCAGTCTTGTTAAAAGTGATCAGATTTGCATTGGTTACCATGCAAACAACTCGACAGAGCAGGTTGACACAATAATGGAAAAGAACGTTACTGTTACACATGCCCAAGACATACTGGAAAAGACACACAACGGGAAGCTCTGCGATCTAGATGGAGTGAAGCCTCTAATTTTGAGAGATTGTAGTGTAGCTGGATGGCTCCTCGGAAACCCAATGTGTGACGAATTCATCAATGTGCCGGAATGGTCCTACATAGTGGAGAAGGCCAATCCAGTCAATGACCTCTGTTACCCAGGGGATTTCAATGACTATGAAGAATTGAAACACCTATTGAGCAGAATAAACCATTTTGAGAAAATTCAGATCATCCCCAAAAGTTCTTGGTCCAGTCATGAAGCCTCATTAGGGGTGAGCTCAGCATGTCCATACCAGGGAAAGTCCTCCTTTTTCAGAAATGTGGTATGGCTTATCAAAAAGAACAGTACATACCCAACAATAAAGAGGAGCTACAATAATACCAACCAAGAAGATCTTTTGGTACTGTGGGGGATTCACCATCCTAATGATGCGGCAGAGCAGACAAAGCTCTATCAAAACCCAACCACCTATATTTCCGTTGGGACATCAACACTAAACCAGAGATTGGTACCAAGAATAGCTACTAGATCCGAAGTAAACGGGCAAAGTGGAAGGATGGAGTTCTTCTGGACAATTTTAAAACCGAATGATGCAATCAACTTCGAGAGTAATGGAAATTTCATTGCTCCAGAATATGCATACAAAATTGTCAAGAAAGGGGACTCAACAATTATGAAAAGTGAATTGGAATATGGTAACTGCAACACCAAGTGTCAAACTCCAATGGGGGCGATAAACTCTAGTATGCCATTCCACAATATACACCCTCTCACCATCGGGGAATGCCCCAAATATGTGAAATCAAACAGATTAGTCCTTGCGACTGGGCTCAGAAATAGCCCTCAAAGAGAGAGAAGAAGAAAAAAGAGAGGATTATTTGGAGCTATAGCAGGTTTTATAGAGGGAGGATGGCAGGGAATGGTAGATGGTTGGTATGGGTACCACCATAGCAATGAGCAGGGGAGTGGGTACGCTGCAGACAAAGAATCCACTCAAAAGGCAATAGATGGAGTCACCAATAAGGTCAACTCGATCATTGACAAAATGAACACTCAGTTTGAGGCCGTTGGAAGGGAATTTAACAACTTAGAAAGGAGAATAGAGAATTTAAACAAGAAGATGGAAGACGGGTTCCTAGATGTCTGGACTTATAATGCTGAACTTCTGGTTCTCATGGAAAATGAGAGAACTCTAGACTTTCATGACTCAAATGTCAAGAACCTTTACGACAAGGTCCGACTACAGCTTAGGGATAATGCAAAGGAACTGGGTAACGGTTGTTTCGAGTTCTATCATAAATGTGATAATGAATGTATGGAAAGTGTAAGAAACGGAACGTATGACTACCCGCAGTATTCAGAAGAAGCAAGACTAAAAAGAGAGGAAATAAGTGGAGTAAAATTGGAATCAATAGGAATTTACCAAATACTGTCAATTTATTCTACAGTGGCGAGTTCCCTAGCACTGGCAATCATGGTAGCTGGTCTATCCTTATGGATGTGCTCCAATGGGTCGTTACAATGCAGAATTTGCATTTAAATTTGTGAGTTCAGATTGTAGTTAAAAACACCCTTGTTTCTACT", 
    "resourceSource": 2
}];

const TEST_DATA = {
  luceneRecord: LUCENE_RECORD,
  sqlRecord: SQL_RECORD,
  predictor: PREDICTOR,
  accessions: ACCESSION_LIST,
  downloadColumns: DOWNLOAD_COLUMNS,
  badGenbankAccession: BAD_GENBANK_ACCESSION,
  canadianPredictors: CANADA_PREDICTORS,
  xmlOptions: XML_OPTIONS,
  jobSequenceGenbank: JOBSEQUENCE_GENBANK_LIST,
  jobSequenceFasta: JOBSEQUENCE_FASTA_LIST,
  jobSequenceBoth: JOBSEQUENCE_GENBANK_LIST.concat(JOBSEQUENCE_FASTA_LIST)
};

module.exports = TEST_DATA;
