/** Combined type to make it easier to support */
export type CountryOrOrgProp = Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2;

export type Organisation = 'EU' | 'NATO' | 'FIVE EYES';

export type ISO_3166_1_ALPHA3 =
  | 'ALA'
  | 'ALB'
  | 'DZA'
  | 'ASM'
  | 'AND'
  | 'AGO'
  | 'AIA'
  | 'ATA'
  | 'ATG'
  | 'ARG'
  | 'ARM'
  | 'ABW'
  | 'AUS'
  | 'AUT'
  | 'AZE'
  | 'BHS'
  | 'BHR'
  | 'BGD'
  | 'BRB'
  | 'BLR'
  | 'BEL'
  | 'BLZ'
  | 'BEN'
  | 'BMU'
  | 'BTN'
  | 'BOL'
  | 'BES'
  | 'BIH'
  | 'BWA'
  | 'BVT'
  | 'BRA'
  | 'IOT'
  | 'BRN'
  | 'BGR'
  | 'BFA'
  | 'BDI'
  | 'CPV'
  | 'KHM'
  | 'CMR'
  | 'CAN'
  | 'CYM'
  | 'CAF'
  | 'TCD'
  | 'CHL'
  | 'CHN'
  | 'CXR'
  | 'CCK'
  | 'COL'
  | 'COM'
  | 'COD'
  | 'COG'
  | 'COK'
  | 'CRI'
  | 'CIV'
  | 'HRV'
  | 'CUB'
  | 'CUW'
  | 'CYP'
  | 'CZE'
  | 'DNK'
  | 'DJI'
  | 'DMA'
  | 'DOM'
  | 'ECU'
  | 'EGY'
  | 'SLV'
  | 'GNQ'
  | 'ERI'
  | 'EST'
  | 'SWZ'
  | 'ETH'
  | 'FLK'
  | 'FRO'
  | 'FJI'
  | 'FIN'
  | 'FRA'
  | 'GUF'
  | 'PYF'
  | 'ATF'
  | 'GAB'
  | 'GMB'
  | 'GEO'
  | 'DEU'
  | 'GHA'
  | 'GIB'
  | 'GRC'
  | 'GRL'
  | 'GRD'
  | 'GLP'
  | 'GUM'
  | 'GTM'
  | 'GGY'
  | 'GIN'
  | 'GNB'
  | 'GUY'
  | 'HTI'
  | 'HMD'
  | 'VAT'
  | 'HND'
  | 'HKG'
  | 'HUN'
  | 'ISL'
  | 'IND'
  | 'IDN'
  | 'IRN'
  | 'IRQ'
  | 'IRL'
  | 'AFG'
  | 'IMN'
  | 'ISR'
  | 'ITA'
  | 'JAM'
  | 'JPN'
  | 'JEY'
  | 'JOR'
  | 'KAZ'
  | 'KEN'
  | 'KIR'
  | 'PRK'
  | 'KOR'
  | 'KWT'
  | 'KGZ'
  | 'LAO'
  | 'LVA'
  | 'LBN'
  | 'LSO'
  | 'LBR'
  | 'LBY'
  | 'LIE'
  | 'LTU'
  | 'LUX'
  | 'MAC'
  | 'MKD'
  | 'MDG'
  | 'MWI'
  | 'MYS'
  | 'MDV'
  | 'MLI'
  | 'MLT'
  | 'MHL'
  | 'MTQ'
  | 'MRT'
  | 'MUS'
  | 'MYT'
  | 'MEX'
  | 'FSM'
  | 'MDA'
  | 'MCO'
  | 'MNG'
  | 'MNE'
  | 'MSR'
  | 'MAR'
  | 'MOZ'
  | 'MMR'
  | 'NAM'
  | 'NRU'
  | 'NPL'
  | 'NLD'
  | 'NCL'
  | 'NZL'
  | 'NIC'
  | 'NER'
  | 'NGA'
  | 'NIU'
  | 'NFK'
  | 'MNP'
  | 'NOR'
  | 'OMN'
  | 'PAK'
  | 'PLW'
  | 'PSE'
  | 'PAN'
  | 'PNG'
  | 'PRY'
  | 'PER'
  | 'PHL'
  | 'PCN'
  | 'POL'
  | 'PRT'
  | 'PRI'
  | 'QAT'
  | 'REU'
  | 'ROU'
  | 'RUS'
  | 'RWA'
  | 'BLM'
  | 'KNA'
  | 'LCA'
  | 'MAF'
  | 'SPM'
  | 'VCT'
  | 'SHN'
  | 'WSM'
  | 'SMR'
  | 'STP'
  | 'SAU'
  | 'SEN'
  | 'SRB'
  | 'SYC'
  | 'SLE'
  | 'SGP'
  | 'SXM'
  | 'SVK'
  | 'SVN'
  | 'SLB'
  | 'SOM'
  | 'ZAF'
  | 'SGS'
  | 'SSD'
  | 'ESP'
  | 'LKA'
  | 'SDN'
  | 'SUR'
  | 'SJM'
  | 'SWE'
  | 'CHE'
  | 'SYR'
  | 'TWN'
  | 'TJK'
  | 'TZA'
  | 'THA'
  | 'TLS'
  | 'TGO'
  | 'TKL'
  | 'TON'
  | 'TTO'
  | 'TUN'
  | 'TUR'
  | 'TKM'
  | 'TCA'
  | 'TUV'
  | 'UGA'
  | 'UKR'
  | 'ARE'
  | 'GBR'
  | 'UK'
  | 'UMI'
  | 'USA'
  | 'URY'
  | 'UZB'
  | 'VUT'
  | 'VEN'
  | 'VNM'
  | 'VGB'
  | 'VIR'
  | 'WLF'
  | 'ESH'
  | 'YEM'
  | 'ZMB'
  | 'ZWE';

export type ISO_3166_1_ALPHA2 =
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'CV'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CD'
  | 'CG'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'SZ'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'AF'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'SH'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW';
