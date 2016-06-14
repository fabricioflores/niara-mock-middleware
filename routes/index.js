var express = require('express');
var router = express.Router();

var appProtocol = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 2.4446385359632745,
          "bytes_received_sum": 9319990787.0,
          "bytes_sent_percentage": 4.072204458685146,
          "bytes_sent_sum": 31557161088.0,
          "count": 41532263,
          "count_percentage": 76.74882951476815,
          "name": "udp"
        },
        {
          "bytes_received_percentage": 48.03144168453956,
          "bytes_received_sum": 183116067018.0,
          "bytes_sent_percentage": 24.838100026539625,
          "bytes_sent_sum": 192480493455.0,
          "count": 10622621,
          "count_percentage": 19.62988937368994,
          "name": "tcp"
        },
        {
          "bytes_received_percentage": 43.36348125280325,
          "bytes_received_sum": 165319837605.0,
          "bytes_sent_percentage": 70.36751895378946,
          "bytes_sent_sum": 545306394489.0,
          "count": 1412252,
          "count_percentage": 2.6097467402604657,
          "name": "ssl"
        },
        {
          "bytes_received_percentage": 6.160223466488238,
          "bytes_received_sum": 23485364036.0,
          "bytes_sent_percentage": 0.7144892519661047,
          "bytes_sent_sum": 5536866493.0,
          "count": 454326,
          "count_percentage": 0.8395639004339002,
          "name": "http"
        },
        {
          "bytes_received_percentage": 0.0,
          "bytes_received_sum": 0.0,
          "bytes_sent_percentage": 0.003971564073973747,
          "bytes_sent_sum": 30777258.0,
          "count": 61267,
          "count_percentage": 0.1132172965841351,
          "name": "ip"
        },
        {
          "bytes_received_percentage": 0.0,
          "bytes_received_sum": 0.0,
          "bytes_sent_percentage": 0.003463501059713269,
          "bytes_sent_sum": 26840072.0,
          "count": 29044,
          "count_percentage": 0.05367135916544991,
          "name": "ip6"
        },
        {
          "bytes_received_percentage": 0.00021506020568518925,
          "bytes_received_sum": 819900.0,
          "bytes_sent_percentage": 0.00025224388598748604,
          "bytes_sent_sum": 1954740.0,
          "count": 2750,
          "count_percentage": 0.0050818150979543885,
          "name": "l2"
        }
      ],
      "debug": {
        "data": {
          "app_protocol": {
            "http": {
              "bytes_received_sum": 23485364036.0,
              "bytes_sent_sum": 5536866493.0,
              "count": 454326
            },
            "ip": {
              "bytes_received_sum": 0.0,
              "bytes_sent_sum": 30777258.0,
              "count": 61267
            },
            "ip6": {
              "bytes_received_sum": 0.0,
              "bytes_sent_sum": 26840072.0,
              "count": 29044
            },
            "l2": {
              "bytes_received_sum": 819900.0,
              "bytes_sent_sum": 1954740.0,
              "count": 2750
            },
            "ssl": {
              "bytes_received_sum": 165319837605.0,
              "bytes_sent_sum": 545306394489.0,
              "count": 1412252
            },
            "tcp": {
              "bytes_received_sum": 183116067018.0,
              "bytes_sent_sum": 192480493455.0,
              "count": 10622621
            },
            "udp": {
              "bytes_received_sum": 9319990787.0,
              "bytes_sent_sum": 31557161088.0,
              "count": 41532263
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Name",
      "title": "Protocol"
    }
  };

  var destIp = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 71.36734137054266,
          "bytes_received_sum": 3612608699.0,
          "bytes_sent_percentage": 5.866159424612637,
          "bytes_sent_sum": 2701528717.0,
          "count": 26743087,
          "count_percentage": 49.419426648184626,
          "name": "8.8.8.8"
        },
        {
          "bytes_received_percentage": 71.36734137054266,
          "bytes_received_sum": 3612608699.0,
          "bytes_sent_percentage": 5.866159424612637,
          "bytes_sent_sum": 2701528717.0,
          "count": 26743087,
          "count_percentage": 49.419426648184626,
          "name": "8.8.8.8"
        },
        {
          "bytes_received_percentage": 71.36734137054266,
          "bytes_received_sum": 3612608699.0,
          "bytes_sent_percentage": 5.866159424612637,
          "bytes_sent_sum": 2701528717.0,
          "count": 26743087,
          "count_percentage": 49.419426648184626,
          "name": "8.8.8.8"
        },
        {
          "bytes_received_percentage": 71.36734137054266,
          "bytes_received_sum": 3612608699.0,
          "bytes_sent_percentage": 5.866159424612637,
          "bytes_sent_sum": 2701528717.0,
          "count": 26743087,
          "count_percentage": 49.419426648184626,
          "name": "8.8.8.8"
        },
        {
          "bytes_received_percentage": 71.36734137054266,
          "bytes_received_sum": 3612608699.0,
          "bytes_sent_percentage": 5.866159424612637,
          "bytes_sent_sum": 2701528717.0,
          "count": 26743087,
          "count_percentage": 49.419426648184626,
          "name": "8.8.8.8"
        },
        {
          "bytes_received_percentage": 71.36734137054266,
          "bytes_received_sum": 3612608699.0,
          "bytes_sent_percentage": 5.866159424612637,
          "bytes_sent_sum": 2701528717.0,
          "count": 26743087,
          "count_percentage": 49.419426648184626,
          "name": "8.8.8.8"
        },
        {
          "bytes_received_percentage": 5.0900527770412225,
          "bytes_received_sum": 257658035.0,
          "bytes_sent_percentage": 0.6064947791654668,
          "bytes_sent_sum": 279307626.0,
          "count": 3276455,
          "count_percentage": 6.054668540642962,
          "name": "8.8.4.4"
        },
        {
          "bytes_received_percentage": 0.9599599829270592,
          "bytes_received_sum": 48593092.0,
          "bytes_sent_percentage": 0.8991137258870555,
          "bytes_sent_sum": 414066747.0,
          "count": 2559492,
          "count_percentage": 4.729769123161263,
          "name": "10.43.1.75"
        },
        {
          "bytes_received_percentage": 0.0,
          "bytes_received_sum": 0.0,
          "bytes_sent_percentage": 0.6740348189829442,
          "bytes_sent_sum": 310411683.0,
          "count": 2284078,
          "count_percentage": 4.220822569201987,
          "name": "192.168.1.2"
        },
        {
          "bytes_received_percentage": 0.0,
          "bytes_received_sum": 0.0,
          "bytes_sent_percentage": 0.6739102075772678,
          "bytes_sent_sum": 310354296.0,
          "count": 2283972,
          "count_percentage": 4.22062668832912,
          "name": "192.168.1.3"
        },
        {
          "bytes_received_percentage": 0.0,
          "bytes_received_sum": 0.0,
          "bytes_sent_percentage": 0.6739948843573008,
          "bytes_sent_sum": 310393292.0,
          "count": 2283897,
          "count_percentage": 4.220488093371904,
          "name": "192.168.1.1"
        },
        {
          "bytes_received_percentage": 0.365943824318487,
          "bytes_received_sum": 18524045.0,
          "bytes_sent_percentage": 0.3436840024383551,
          "bytes_sent_sum": 158275992.0,
          "count": 721293,
          "count_percentage": 1.3329009663450235,
          "name": "10.43.1.76"
        },
        {
          "bytes_received_percentage": 0.13928451099234507,
          "bytes_received_sum": 7050570.0,
          "bytes_sent_percentage": 0.5655407446285515,
          "bytes_sent_sum": 260447160.0,
          "count": 532723,
          "count_percentage": 0.9844362852463838,
          "name": "54.191.220.235"
        },
        {
          "bytes_received_percentage": 10.622042849715827,
          "bytes_received_sum": 537686898.0,
          "bytes_sent_percentage": 41.332712304413285,
          "bytes_sent_sum": 19034857589.0,
          "count": 528630,
          "count_percentage": 0.9768726964478648,
          "name": "52.24.77.115"
        },
        {
          "bytes_received_percentage": 11.455374684462399,
          "bytes_received_sum": 579870084.0,
          "bytes_sent_percentage": 48.364355107937136,
          "bytes_sent_sum": 22273123648.0,
          "count": 426676,
          "count_percentage": 0.7884685595399223,
          "name": "52.11.30.85"
        }
      ],
      "debug": {
        "data": {
          "dest_ip": {
            "10.43.1.75": {
              "bytes_received_sum": 48593092.0,
              "bytes_sent_sum": 414066747.0,
              "count": 2559492
            },
            "10.43.1.76": {
              "bytes_received_sum": 18524045.0,
              "bytes_sent_sum": 158275992.0,
              "count": 721293
            },
            "192.168.1.1": {
              "bytes_received_sum": 0.0,
              "bytes_sent_sum": 310393292.0,
              "count": 2283897
            },
            "192.168.1.2": {
              "bytes_received_sum": 0.0,
              "bytes_sent_sum": 310411683.0,
              "count": 2284078
            },
            "192.168.1.3": {
              "bytes_received_sum": 0.0,
              "bytes_sent_sum": 310354296.0,
              "count": 2283972
            },
            "52.11.30.85": {
              "bytes_received_sum": 579870084.0,
              "bytes_sent_sum": 22273123648.0,
              "count": 426676
            },
            "52.24.77.115": {
              "bytes_received_sum": 537686898.0,
              "bytes_sent_sum": 19034857589.0,
              "count": 528630
            },
            "54.191.220.235": {
              "bytes_received_sum": 7050570.0,
              "bytes_sent_sum": 260447160.0,
              "count": 532723
            },
            "8.8.4.4": {
              "bytes_received_sum": 257658035.0,
              "bytes_sent_sum": 279307626.0,
              "count": 3276455
            },
            "8.8.8.8": {
              "bytes_received_sum": 3612608699.0,
              "bytes_sent_sum": 2701528717.0,
              "count": 26743087
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "IP",
      "title": "Destination"
    }
  };

  var destPort ={
    "data": {
      "data": [
        {
          "bytes_received_percentage": 3.8262391291177154,
          "bytes_received_sum": 4985049787.0,
          "bytes_sent_percentage": 0.5234938801381739,
          "bytes_sent_sum": 3724997542.0,
          "count": 37656709,
          "count_percentage": 69.58706630380905,
          "name": 53
        },
        {
          "bytes_received_percentage": 0.0,
          "bytes_received_sum": 0.0,
          "bytes_sent_percentage": 0.13085276278127791,
          "bytes_sent_sum": 931102040.0,
          "count": 6851771,
          "count_percentage": 12.661612114736743,
          "name": 2181
        },
        {
          "bytes_received_percentage": 36.42702438332655,
          "bytes_received_sum": 47459273719.0,
          "bytes_sent_percentage": 93.09178028770523,
          "bytes_sent_sum": 662408226550.0,
          "count": 4413549,
          "count_percentage": 8.155941797731451,
          "name": 443
        },
        {
          "bytes_received_percentage": 19.02288309799091,
          "bytes_received_sum": 24784132966.0,
          "bytes_sent_percentage": 0.22986879419605774,
          "bytes_sent_sum": 1635665145.0,
          "count": 617071,
          "count_percentage": 1.1403057179308407,
          "name": 80
        },
        {
          "bytes_received_percentage": 0.021019559015938022,
          "bytes_received_sum": 27385520.0,
          "bytes_sent_percentage": 0.005194563635367274,
          "bytes_sent_sum": 36962680.0,
          "count": 291380,
          "count_percentage": 0.538450648451618,
          "name": 123
        },
        {
          "bytes_received_percentage": 0.003967718923967544,
          "bytes_received_sum": 5169378.0,
          "bytes_sent_percentage": 0.030135718742343737,
          "bytes_sent_sum": 214435130.0,
          "count": 118159,
          "count_percentage": 0.21834988733061547,
          "name": 137
        },
        {
          "bytes_received_percentage": 39.89156214704713,
          "bytes_received_sum": 51973077655.0,
          "bytes_sent_percentage": 5.96185399190368,
          "bytes_sent_sum": 42422447154.0,
          "count": 104281,
          "count_percentage": 0.1927042764471933,
          "name": 22
        },
        {
          "bytes_received_percentage": 0.0,
          "bytes_received_sum": 0.0,
          "bytes_sent_percentage": 0.0011771267265247465,
          "bytes_sent_sum": 8376018.0,
          "count": 58833,
          "count_percentage": 0.10871942823925473,
          "name": 5355
        },
        {
          "bytes_received_percentage": 0.05333452058984072,
          "bytes_received_sum": 69487356.0,
          "bytes_sent_percentage": 0.007984028826183959,
          "bytes_sent_sum": 56811529.0,
          "count": 37500,
          "count_percentage": 0.06929747860846892,
          "name": 7183
        },
        {
          "bytes_received_percentage": 0.7539694439879496,
          "bytes_received_sum": 982315817.0,
          "bytes_sent_percentage": 0.017658845345147722,
          "bytes_sent_sum": 125654106.0,
          "count": 26936,
          "count_percentage": 0.04977591690127251,
          "name": 993
        }
      ],
      "debug": {
        "data": {
          "dest_port": {
            "123": {
              "bytes_received_sum": 27385520.0,
              "bytes_sent_sum": 36962680.0,
              "count": 291380
            },
            "137": {
              "bytes_received_sum": 5169378.0,
              "bytes_sent_sum": 214435130.0,
              "count": 118159
            },
            "2181": {
              "bytes_received_sum": 0.0,
              "bytes_sent_sum": 931102040.0,
              "count": 6851771
            },
            "22": {
              "bytes_received_sum": 51973077655.0,
              "bytes_sent_sum": 42422447154.0,
              "count": 104281
            },
            "443": {
              "bytes_received_sum": 47459273719.0,
              "bytes_sent_sum": 662408226550.0,
              "count": 4413549
            },
            "53": {
              "bytes_received_sum": 4985049787.0,
              "bytes_sent_sum": 3724997542.0,
              "count": 37656709
            },
            "5355": {
              "bytes_received_sum": 0.0,
              "bytes_sent_sum": 8376018.0,
              "count": 58833
            },
            "7183": {
              "bytes_received_sum": 69487356.0,
              "bytes_sent_sum": 56811529.0,
              "count": 37500
            },
            "80": {
              "bytes_received_sum": 24784132966.0,
              "bytes_sent_sum": 1635665145.0,
              "count": 617071
            },
            "993": {
              "bytes_received_sum": 982315817.0,
              "bytes_sent_sum": 125654106.0,
              "count": 26936
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Number",
      "title": "Port"
    }
  };

  var objectType = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 42.35636179745223,
          "bytes_received_sum": 567395292.0,
          "bytes_sent_percentage": 43.41345340846061,
          "bytes_sent_sum": 10269053.0,
          "count": 52,
          "count_percentage": 9.609250367041024e-05,
          "name": "PE (exe)",
          "packets_received_percentage": 42.44169357531947,
          "packets_received_sum": 379986.0,
          "packets_sent_percentage": 42.21510018455049,
          "packets_sent_sum": 153717.0
        },
        {
          "bytes_received_percentage": 35.223747187819185,
          "bytes_received_sum": 471848560.0,
          "bytes_sent_percentage": 33.64077571395717,
          "bytes_sent_sum": 7957416.0,
          "count": 32,
          "count_percentage": 5.9133848412560154e-05,
          "name": "CAB",
          "packets_received_percentage": 35.343617260109035,
          "packets_received_sum": 316436.0,
          "packets_sent_percentage": 34.00507513841286,
          "packets_sent_sum": 123822.0
        },
        {
          "bytes_received_percentage": 0.0008351155289954328,
          "bytes_received_sum": 11187.0,
          "bytes_sent_percentage": 0.04675726132658721,
          "bytes_sent_sum": 11060.0,
          "count": 8,
          "count_percentage": 1.4783462103140039e-05,
          "name": "GIF (v89a)",
          "packets_received_percentage": 0.004020940162825738,
          "packets_received_sum": 36.0,
          "packets_sent_percentage": 0.01318217769575534,
          "packets_sent_sum": 48.0
        },
        {
          "bytes_received_percentage": 0.01318821132077475,
          "bytes_received_sum": 176666.0,
          "bytes_sent_percentage": 0.05845503185919723,
          "bytes_sent_sum": 13827.0,
          "count": 3,
          "count_percentage": 5.5437982886775145e-06,
          "name": "JPEG",
          "packets_received_percentage": 0.015078525610596517,
          "packets_received_sum": 135.0,
          "packets_sent_percentage": 0.031033043325424024,
          "packets_sent_sum": 113.0
        },
        {
          "bytes_received_percentage": 22.38655932714093,
          "bytes_received_sum": 299884783.0,
          "bytes_sent_percentage": 22.8049368227384,
          "bytes_sent_sum": 5394298.0,
          "count": 2,
          "count_percentage": 3.6958655257850096e-06,
          "name": "CDF V2",
          "packets_received_percentage": 22.175149919637043,
          "packets_received_sum": 198537.0,
          "packets_sent_percentage": 23.707597328411985,
          "packets_sent_sum": 86326.0
        },
        {
          "bytes_received_percentage": 0.019308360737880458,
          "bytes_received_sum": 258650.0,
          "bytes_sent_percentage": 0.03562176165803109,
          "bytes_sent_sum": 8426.0,
          "count": 2,
          "count_percentage": 3.6958655257850096e-06,
          "name": "PDF",
          "packets_received_percentage": 0.020439779161030836,
          "packets_received_sum": 183.0,
          "packets_sent_percentage": 0.028012127603480097,
          "packets_sent_sum": 102.0
        }
      ],
      "debug": {
        "data": {
          "object_type": {
            "CAB": {
              "bytes_received_sum": 471848560.0,
              "bytes_sent_sum": 7957416.0,
              "count": 32,
              "packets_received_sum": 316436.0,
              "packets_sent_sum": 123822.0
            },
            "CDF V2": {
              "bytes_received_sum": 299884783.0,
              "bytes_sent_sum": 5394298.0,
              "count": 2,
              "packets_received_sum": 198537.0,
              "packets_sent_sum": 86326.0
            },
            "GIF (v89a)": {
              "bytes_received_sum": 11187.0,
              "bytes_sent_sum": 11060.0,
              "count": 8,
              "packets_received_sum": 36.0,
              "packets_sent_sum": 48.0
            },
            "JPEG": {
              "bytes_received_sum": 176666.0,
              "bytes_sent_sum": 13827.0,
              "count": 3,
              "packets_received_sum": 135.0,
              "packets_sent_sum": 113.0
            },
            "PDF": {
              "bytes_received_sum": 258650.0,
              "bytes_sent_sum": 8426.0,
              "count": 2,
              "packets_received_sum": 183.0,
              "packets_sent_sum": 102.0
            },
            "PE (exe)": {
              "bytes_received_sum": 567395292.0,
              "bytes_sent_sum": 10269053.0,
              "count": 52,
              "packets_received_sum": 379986.0,
              "packets_sent_sum": 153717.0
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent",
        "packets_received": "Packets Received",
        "packets_sent": "Packets Sent"
      },
      "header": "Name",
      "title": "File types"
    }
  };

  var destCountry = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 33.80154315066055,
          "bytes_received_sum": 127859292856.0,
          "bytes_sent_percentage": 92.02039206774384,
          "bytes_sent_sum": 712557629416.0,
          "count": 19999,
          "count_percentage": 72.2935449324759,
          "name": "United States"
        },
        {
          "bytes_received_percentage": 66.07690364452628,
          "bytes_received_sum": 249945576048.0,
          "bytes_sent_percentage": 7.931163295011018,
          "bytes_sent_sum": 61414766760.0,
          "count": 10751793,
          "count_percentage": 19.868590544538293,
          "name": "Internal"
        },
        {
          "bytes_received_percentage": 0.03970897368943067,
          "bytes_received_sum": 150205015.0,
          "bytes_sent_percentage": 0.012064906499987078,
          "bytes_sent_sum": 93424305.0,
          "count": 522584,
          "count_percentage": 0.9657000949634167,
          "name": "China"
        },
        {
          "bytes_received_percentage": 0.00822340840889304,
          "bytes_received_sum": 31106248.0,
          "bytes_sent_percentage": 0.006680578068801507,
          "bytes_sent_sum": 51730891.0,
          "count": 383542,
          "count_percentage": 0.7087598277453171,
          "name": "Malaysia"
        },
        {
          "bytes_received_percentage": 0.0021285501435225488,
          "bytes_received_sum": 8051553.0,
          "bytes_sent_percentage": 0.005016731208449118,
          "bytes_sent_sum": 38846934.0,
          "count": 306378,
          "count_percentage": 0.5661659440294798,
          "name": "Iran"
        },
        {
          "bytes_received_percentage": 0.0029026031535666448,
          "bytes_received_sum": 10979522.0,
          "bytes_sent_percentage": 0.006393455436485465,
          "bytes_sent_sum": 49507564.0,
          "count": 298706,
          "count_percentage": 0.5519886038725685,
          "name": "Romania"
        },
        {
          "bytes_received_percentage": 0.05124928327086513,
          "bytes_received_sum": 193857928.0,
          "bytes_sent_percentage": 0.00693674870709104,
          "bytes_sent_sum": 53714542.0,
          "count": 254937,
          "count_percentage": 0.47110643477352654,
          "name": "Netherlands"
        },
        {
          "bytes_received_percentage": 0.001304536611356407,
          "bytes_received_sum": 4934601.0,
          "bytes_sent_percentage": 0.003878853614235154,
          "bytes_sent_sum": 30035807.0,
          "count": 253587,
          "count_percentage": 0.4686117255436216,
          "name": "Greece"
        },
        {
          "bytes_received_percentage": 0.007566543453895074,
          "bytes_received_sum": 28621560.0,
          "bytes_sent_percentage": 0.004035090053216089,
          "bytes_sent_sum": 31245620.0,
          "count": 232496,
          "count_percentage": 0.4296369756414558,
          "name": "Indonesia"
        },
        {
          "bytes_received_percentage": 0.008469306081639733,
          "bytes_received_sum": 32036392.0,
          "bytes_sent_percentage": 0.0034382736568730316,
          "bytes_sent_sum": 26624187.0,
          "count": 219152,
          "count_percentage": 0.4049781608534182,
          "name": "Russia"
        }
      ],
      "debug": {
        "data": {
          "dest_country": {
            "China": {
              "bytes_received_sum": 150205015.0,
              "bytes_sent_sum": 93424305.0,
              "count": 522584
            },
            "Greece": {
              "bytes_received_sum": 4934601.0,
              "bytes_sent_sum": 30035807.0,
              "count": 253587
            },
            "Indonesia": {
              "bytes_received_sum": 28621560.0,
              "bytes_sent_sum": 31245620.0,
              "count": 232496
            },
            "Internal": {
              "bytes_received_sum": 249945576048.0,
              "bytes_sent_sum": 61414766760.0,
              "count": 10751793
            },
            "Iran": {
              "bytes_received_sum": 8051553.0,
              "bytes_sent_sum": 38846934.0,
              "count": 306378
            },
            "Malaysia": {
              "bytes_received_sum": 31106248.0,
              "bytes_sent_sum": 51730891.0,
              "count": 383542
            },
            "Netherlands": {
              "bytes_received_sum": 193857928.0,
              "bytes_sent_sum": 53714542.0,
              "count": 254937
            },
            "Romania": {
              "bytes_received_sum": 10979522.0,
              "bytes_sent_sum": 49507564.0,
              "count": 298706
            },
            "Russia": {
              "bytes_received_sum": 32036392.0,
              "bytes_sent_sum": 26624187.0,
              "count": 219152
            },
            "United States": {
              "bytes_received_sum": 127859292856.0,
              "bytes_sent_sum": 712557629416.0,
              "count": 39121307
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Name",
      "title": "Country"
    }
  };

  var userName ={
    "data": {
      "data": [
        {
          "bytes_received_percentage": 99.70002564472861,
          "bytes_received_sum": 345175323360.0,
          "bytes_sent_percentage": 99.9785975009147,
          "bytes_sent_sum": 743996857710.0,
          "count": 52838896,
          "count_percentage": 97.64272707346973,
          "name": "unknown"
        },
        {
          "bytes_received_percentage": 0.29997435527137917,
          "bytes_received_sum": 1038552843.0,
          "bytes_sent_percentage": 0.021402499085300154,
          "bytes_sent_sum": 159268008.0,
          "count": 31239,
          "count_percentage": 0.057727571579998964,
          "name": "-"
        }
      ],
      "debug": {
        "data": {
          "user_name": {
            "-": {
              "bytes_received_sum": 1038552843.0,
              "bytes_sent_sum": 159268008.0,
              "count": 31239
            },
            "unknown": {
              "bytes_received_sum": 345175323360.0,
              "bytes_sent_sum": 743996857710.0,
              "count": 52838896
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Name",
      "title": "User"
    }
  };

  var appId = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 1.6929701164351194,
          "bytes_received_sum": 4986336132.0,
          "bytes_sent_percentage": 0.6070564277262784,
          "bytes_sent_sum": 4230468670.0,
          "count": 40786501,
          "count_percentage": 75.37071148164792,
          "name": "dns"
        },
        {
          "bytes_received_percentage": 43.61215222760186,
          "bytes_received_sum": 128451676929.0,
          "bytes_sent_percentage": 21.109323734115748,
          "bytes_sent_sum": 147107136377.0,
          "count": 10594371,
          "count_percentage": 19.57768527313823,
          "name": "unknown-tcp"
        },
        {
          "bytes_received_percentage": 51.88018745335445,
          "bytes_received_sum": 152803673687.0,
          "bytes_sent_percentage": 77.69672778843065,
          "bytes_sent_sum": 541454727531.0,
          "count": 1059887,
          "count_percentage": 1.9585999122638482,
          "name": "https"
        },
        {
          "bytes_received_percentage": 2.1667615091545085,
          "bytes_received_sum": 6381802666.0,
          "bytes_sent_percentage": 0.2871870539014988,
          "bytes_sent_sum": 2001355687.0,
          "count": 327233,
          "count_percentage": 0.6047045817996031,
          "name": "unknown-http"
        },
        {
          "bytes_received_percentage": 0.009328135614560069,
          "bytes_received_sum": 27474330.0,
          "bytes_sent_percentage": 0.005374085568537786,
          "bytes_sent_sum": 37451050.0,
          "count": 292617,
          "count_percentage": 0.540736541279316,
          "name": "ntp"
        },
        {
          "bytes_received_percentage": 0.0017551168318544364,
          "bytes_received_sum": 5169378.0,
          "bytes_sent_percentage": 0.03692784343278236,
          "bytes_sent_sum": 257343597.0,
          "count": 136590,
          "count_percentage": 0.25240913608348725,
          "name": "nbns"
        },
        {
          "bytes_received_percentage": 0.01898015097718539,
          "bytes_received_sum": 55902589.0,
          "bytes_sent_percentage": 0.006215587809939957,
          "bytes_sent_sum": 43315330.0,
          "count": 81075,
          "count_percentage": 0.14982114875150984,
          "name": "bittorrent"
        },
        {
          "bytes_received_percentage": 0.35924555162830984,
          "bytes_received_sum": 1058092554.0,
          "bytes_sent_percentage": 0.07647841878796627,
          "bytes_sent_sum": 532964548.0,
          "count": 66622,
          "count_percentage": 0.12311297652942445,
          "name": "google"
        },
        {
          "bytes_received_percentage": 0.2274997490626699,
          "bytes_received_sum": 670059210.0,
          "bytes_sent_percentage": 0.1641678982276295,
          "bytes_sent_sum": 1144056991.0,
          "count": 51890,
          "count_percentage": 0.09588923106649208,
          "name": "unknown-udp"
        },
        {
          "bytes_received_percentage": 0.031119989339473728,
          "bytes_received_sum": 91658279.0,
          "bytes_sent_percentage": 0.010541161998959863,
          "bytes_sent_sum": 73459490.0,
          "count": 48116,
          "count_percentage": 0.08891513281933576,
          "name": "skype"
        }
      ],
      "debug": {
        "data": {
          "app_id": {
            "bittorrent": {
              "bytes_received_sum": 55902589.0,
              "bytes_sent_sum": 43315330.0,
              "count": 81075
            },
            "dns": {
              "bytes_received_sum": 4986336132.0,
              "bytes_sent_sum": 4230468670.0,
              "count": 40786501
            },
            "google": {
              "bytes_received_sum": 1058092554.0,
              "bytes_sent_sum": 532964548.0,
              "count": 66622
            },
            "https": {
              "bytes_received_sum": 152803673687.0,
              "bytes_sent_sum": 541454727531.0,
              "count": 1059887
            },
            "nbns": {
              "bytes_received_sum": 5169378.0,
              "bytes_sent_sum": 257343597.0,
              "count": 136590
            },
            "ntp": {
              "bytes_received_sum": 27474330.0,
              "bytes_sent_sum": 37451050.0,
              "count": 292617
            },
            "skype": {
              "bytes_received_sum": 91658279.0,
              "bytes_sent_sum": 73459490.0,
              "count": 48116
            },
            "unknown-http": {
              "bytes_received_sum": 6381802666.0,
              "bytes_sent_sum": 2001355687.0,
              "count": 327233
            },
            "unknown-tcp": {
              "bytes_received_sum": 128451676929.0,
              "bytes_sent_sum": 147107136377.0,
              "count": 10594371
            },
            "unknown-udp": {
              "bytes_received_sum": 670059210.0,
              "bytes_sent_sum": 1144056991.0,
              "count": 51890
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Name",
      "title": "Application"
    }
  };

  var httpHost = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 40.54875403276414,
          "bytes_received_sum": 848569004.0,
          "bytes_sent_percentage": 31.936090284250398,
          "bytes_sent_sum": 122747666.0,
          "count": 115717,
          "count_percentage": 0.21383723552363199,
          "name": "weather.noaa.gov"
        },
        {
          "bytes_received_percentage": 17.21165617284145,
          "bytes_received_sum": 360190548.0,
          "bytes_sent_percentage": 39.78848487831846,
          "bytes_sent_sum": 152928665.0,
          "count": 45865,
          "count_percentage": 0.08475543617006473,
          "name": "hailataxii.com:80"
        },
        {
          "bytes_received_percentage": 19.527369768287002,
          "bytes_received_sum": 408651785.0,
          "bytes_sent_percentage": 12.099148784891264,
          "bytes_sent_sum": 46503572.0,
          "count": 5896,
          "count_percentage": 0.010895411570014208,
          "name": "archive.cloudera.com"
        },
        {
          "bytes_received_percentage": 0.0998316589910589,
          "bytes_received_sum": 2089190.0,
          "bytes_sent_percentage": 0.5680938784362586,
          "bytes_sent_sum": 2183492.0,
          "count": 5132,
          "count_percentage": 0.009483590939164335,
          "name": "static.ess.apple.com:80"
        },
        {
          "bytes_received_percentage": 0.1013535113240431,
          "bytes_received_sum": 2121038.0,
          "bytes_sent_percentage": 1.5224063707090087,
          "bytes_sent_sum": 5851431.0,
          "count": 4760,
          "count_percentage": 0.008796159951368322,
          "name": "afs.moatads.com"
        },
        {
          "bytes_received_percentage": 0.104100902051402,
          "bytes_received_sum": 2178533.0,
          "bytes_sent_percentage": 0.5816842115998873,
          "bytes_sent_sum": 2235727.0,
          "count": 4536,
          "count_percentage": 0.008382223012480402,
          "name": "mxr.mozilla.org"
        },
        {
          "bytes_received_percentage": 19.90440385751262,
          "bytes_received_sum": 416542026.0,
          "bytes_sent_percentage": 8.879482169149863,
          "bytes_sent_sum": 34128652.0,
          "count": 3995,
          "count_percentage": 0.007382491387755557,
          "name": "s3.amazonaws.com"
        },
        {
          "bytes_received_percentage": 0.8550098798215747,
          "bytes_received_sum": 17892902.0,
          "bytes_sent_percentage": 1.5373623716964315,
          "bytes_sent_sum": 5908915.0,
          "count": 3175,
          "count_percentage": 0.0058671865221837025,
          "name": "obie-cdh-1-mgmt.niara.com"
        },
        {
          "bytes_received_percentage": 0.791718636966548,
          "bytes_received_sum": 16568398.0,
          "bytes_sent_percentage": 1.5471137967365924,
          "bytes_sent_sum": 5946395.0,
          "count": 2991,
          "count_percentage": 0.005527166893811482,
          "name": "obie-an-node-mgmt.niara.com"
        },
        {
          "bytes_received_percentage": 0.8558015794401655,
          "bytes_received_sum": 17909470.0,
          "bytes_sent_percentage": 1.5401332542118455,
          "bytes_sent_sum": 5919565.0,
          "count": 2967,
          "count_percentage": 0.005482816507502062,
          "name": "obie-cdh-2-mgmt.niara.com"
        }
      ],
      "debug": {
        "data": {
          "http_host": {
            "afs.moatads.com": {
              "bytes_received_sum": 2121038.0,
              "bytes_sent_sum": 5851431.0,
              "count": 4760
            },
            "archive.cloudera.com": {
              "bytes_received_sum": 408651785.0,
              "bytes_sent_sum": 46503572.0,
              "count": 5896
            },
            "hailataxii.com:80": {
              "bytes_received_sum": 360190548.0,
              "bytes_sent_sum": 152928665.0,
              "count": 45865
            },
            "mxr.mozilla.org": {
              "bytes_received_sum": 2178533.0,
              "bytes_sent_sum": 2235727.0,
              "count": 4536
            },
            "obie-an-node-mgmt.niara.com": {
              "bytes_received_sum": 16568398.0,
              "bytes_sent_sum": 5946395.0,
              "count": 2991
            },
            "obie-cdh-1-mgmt.niara.com": {
              "bytes_received_sum": 17892902.0,
              "bytes_sent_sum": 5908915.0,
              "count": 3175
            },
            "obie-cdh-2-mgmt.niara.com": {
              "bytes_received_sum": 17909470.0,
              "bytes_sent_sum": 5919565.0,
              "count": 2967
            },
            "s3.amazonaws.com": {
              "bytes_received_sum": 416542026.0,
              "bytes_sent_sum": 34128652.0,
              "count": 3995
            },
            "static.ess.apple.com:80": {
              "bytes_received_sum": 2089190.0,
              "bytes_sent_sum": 2183492.0,
              "count": 5132
            },
            "weather.noaa.gov": {
              "bytes_received_sum": 848569004.0,
              "bytes_sent_sum": 122747666.0,
              "count": 115717
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Hostname",
      "title": "Host"
    }
  };

  var userDomain = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 90.54137343613905,
          "bytes_received_sum": 345175323360.0,
          "bytes_sent_percentage": 96.00773965862061,
          "bytes_sent_sum": 743996857710.0,
          "count": 52838896,
          "count_percentage": 97.64272707346973,
          "name": "unknown"
        },
        {
          "bytes_received_percentage": 8.015474210436132,
          "bytes_received_sum": 30557785877.0,
          "bytes_sent_percentage": 0.6124306792691697,
          "bytes_sent_sum": 4745935094.0,
          "count": 796348,
          "count_percentage": 1.4715975598639206,
          "name": "NIARA"
        },
        {
          "bytes_received_percentage": 1.4431523534248187,
          "bytes_received_sum": 5501800573.0,
          "bytes_sent_percentage": 3.379829662110223,
          "bytes_sent_sum": 26191457659.0,
          "count": 432449,
          "count_percentage": 0.7991366753801008,
          "name": "NIARA.COM"
        }
      ],
      "debug": {
        "data": {
          "user_domain": {
            "NIARA": {
              "bytes_received_sum": 30557785877.0,
              "bytes_sent_sum": 4745935094.0,
              "count": 796348
            },
            "NIARA.COM": {
              "bytes_received_sum": 5501800573.0,
              "bytes_sent_sum": 26191457659.0,
              "count": 432449
            },
            "unknown": {
              "bytes_received_sum": 345175323360.0,
              "bytes_sent_sum": 743996857710.0,
              "count": 52838896
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Name",
      "title": "Domains"
    }
  };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  return res.send({ data: 'Hello Ritesh!' });
});

router.post('/api/search/groupbySimple', function(req, res, next) {
  if (req.body.field === 'app_protocol') {
    return res.send({ data: appProtocol.data });
  }
  if (req.body.field === 'dest_ip') {
    return res.send({ data: destIp.data });
  }
  if (req.body.field === 'dest_port') {
    return res.send({ data: destPort.data });
  }
  if (req.body.field === 'object_type') {
    return res.send({ data: objectType.data });
  }
  if (req.body.field === 'dest_country') {
    return res.send({ data: destCountry.data });
  }
  if (req.body.field === 'user_name') {
    return res.send({ data: userName.data });
  }
  if (req.body.field === 'app_id') {
    return res.send({ data: appId.data });
  }
  if (req.body.field === 'http_host') {
    return res.send({ data: httpHost.data });
  }
  if (req.body.field === 'user_domain') {
    return res.send({ data: userDomain.data });
  }
  return res.send({ data: appProtocol.data });
});

module.exports = router;
