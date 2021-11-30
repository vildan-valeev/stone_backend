import Vue from 'vue';
import {createI18n} from 'vue-i18n';

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    en: {
      // introsec
      'homeH1': 'Create a tile design for yourself',
      'descHomeIntro': `And that's how it works:Choose your stone, choose your design, enter your Maybe, You order and we deliver.`,
      'toTheShop': 'TO THE SHOP',
      // menu
      'home': 'Home',
      'DeinSteinDesign': 'DeinSteinDesign',
      'tiles': 'Tiles',
      'phSeacrh': 'What are you looking for?',
      // recsec
      'resSecTitle': 'Recommendations for you',
      'mk': 'Modern Kitchens',
      'descMk': 'Light tiles for the kitchen with a beautiful finish for a unique, ultra-modern style.',
      'tk': 'Traditional Kitchens',
      'descTk': 'The aged light tones of the tiles make traditional kitchens a popular choice in country houses.',
      'mB': 'Minimalistic bathrooms',
      'descmB': 'Dark tile tones will make the bathroom interior expensive and emphasize minimalism.',
      'h-tB': 'High-tech bathrooms',
      'descH-tB': 'The gray tones of the tiles will make the shape of the bathroom more strict, clear and concise.',
      'viewAll': 'VIEW ALL',
      // create desing sec
      'creatteDesTitle': 'Create your own tile design',
      'creatteDesDesc': `Creating tiles to fit your size is what we do best-let's show you how to get started…`,
      'createtNow': 'CREATE NOW',
      // will be interested
      'wbiTitle': 'You will be interested',
      'wbiItem1Title': 'New tiles in DeinSteinDesign',
      'wbiItem1Desc': 'Check out the new tiles in the DeinSteinDesign assortment.',
      'wbiItem2Title': 'Tiles at affordable prices',
      'wbiItem2Desc': 'See a selection of different tiles at affordable prices.',
      'wbiItem3Title': 'Create a tile design with a cutout for the sink',
      'wbiItem3Desc': 'Create your own tile design with a cutout for the sink with the help of our editor.',
      'readMore': 'READ MORE',
      // footer
     'Navigation': 'Navigation',
     'Home': `Home`,
     'deinsteindesign': 'DeinSteinDesign',
     'KITCHEN': 'Tiles',
     'Copyright': `Copyright © 2021 DeinSteinDesign. All rights reserved.`,
     'Datenschutzerklärung': 'Privacy Policy',
     'Impressum': 'User Agreement',
     'Connections': `Connections`,
     'Facebook': 'Facebook',
     'Twitter': 'Twitter',
     'Instagram': `Instagram`,
     'Youtube': 'Youtube',
     'Account': 'Account',
     'Your account': `Your account`,
     'Returns Centre': 'Returns Centre',
     'protection': '100 % purchase protection',
     'Help': `Help`,
     // page DeinSteinDesign
     // podmenu
     'home': 'Home',
     'deinsteindesign': `DeinSteinDesign`,
     'HeadingH1': 'Erstellen Dein Stein Design',
     'Subtitle': `At DeinSteinDesign, we pride ourselves on helping customers choose the perfect tile shape for their kitchens, bathrooms, stairs and window sills. With the help of our tile editor, you will create your own tile of the desired size.`,
     // filter  
     'slabs': 'Slabs for',
     'bathroom': 'Bathroom',
     'Kitchen': `Kitchen`,
     'Stairs': 'Stairs',
     'Windowsill': 'Windowsill',
     'Material': `Material`,
     'granite': `Granite`,
     'marble': `Marble`,
     'basalt': `Basalt`,
     'Matcolor': `Material color`,
     'View': 'View all colors',
     // list
     'Basalt3': 'Basalt stein “MUSTER”',
     'Shower': `Shower tray silver sparkie granite stone Delivery time 1-3 weeks`,
     'buttonEDITOR': 'STEIN EDITOR',
     'Marbleh3': 'Marble stein “MUSTER”',
     'Shower': `Shower tray silver sparkie granite stone Delivery time 1-3 weeks`,
     'buttonEDITOR': 'STEIN EDITOR',
     // page Tiles
     // podmenu
     'home': 'Home',
     'Tiles': `Tiles`,
     'HeadingH1': 'All our tiles',
     'Subtitle': `At DeinSteinDesign, we pride ourselves on helping customers find the perfect tile for their bathrooms. With our inspiring assortment, you will create the bathroom of your dreams.`,
     // filter  
     'Types': 'Types of tiles',
     'Bicotura': 'Bicotura',
     'Monocot': `Monocot`,
     'Porcelain tile': 'Porcelain tile',
     'Cotto': 'Cotto',
     'Cottoforte': `Cottoforte`,
     'Clinker': 'Clinker',
     'Clinker': 'Majolica',
     'Color': 'Tile color',
     'View': 'View all colors',
     'Price': `Price, €`,
     // list
     'Graniteh3': 'Granite tile “MUSTER”',
     'Shower': `Shower tray silver sparkie granite stone Delivery time 1-3 weeks`,
     'perm²': 'Price per m²',
     '€ 75': '€ 75',
     'Stockpcs': 'Stock: 320 pcs',
     'buttonEDITOR': 'TILE EDITOR',
     // page Datenschutzerklärung
     // header DATENSCHUTZERKLÄRUNG + EINLEITUNG
     'DATEN': 'PRIVACY POLICY',
     'EINLEITUNG': `INTRODUCTION`,
     'Mitder ': 'With the following data protection declaration, we, Bakuli GmbH, Am Steinberg 13, 01309 Dresden, would like to inform you about the types of your personal data (hereinafter also referred to as "data") that we process, for what purposes and to what extent. The data protection declaration applies to all processing of personal data carried out by us, both in the context of the provision of our services and in particular on our websites, in mobile applications and within external online presences, such as our social media profiles (hereinafter collectively referred to as "online offer"). The following provisions inform you about the type, scope, duration and purpose of the processing of personal data by us as the responsible provider of this website as well as about the third-party components used by us for optimisation purposes and to increase the quality of use that are relevant to data protection. We have taken numerous technical, contractual and organisational measures to ensure that the applicable data protection regulations are complied with and thus to protect the data managed by us against accidental or intentional manipulation, loss, destruction or against access by unauthorised persons. Nevertheless, please note that Internet-based data transmissions (e.g. communication by e-mail) generally have security vulnerabilities, so that absolute protection cannot be guaranteed. For this reason, every data subject is free to transmit personal data to us by alternative means, for example by telephone. The terms used are not gender-specific.',
     // header VERANTWORTLICHER  
     'VERANTWORTLICHER': 'RESPONSIBLE',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header VERTRETUNGSBERECHTIGTE PERSONEN
     'PERSONEN': 'AUTHORIZED REPRESENTATIVES',
     'Tina': `Tina Oehler & Linda Winnie Grumbt`,
     'EMail': 'E-Mail: hello@deinsteindesign.de',
     // header ÜBERSICHT DER VERARBEITUNGEN
     'VERARBEITUNGEN': 'OVERVIEW OF PROCESSING OPERATIONS',
     'Die': 'The following overview summarizes the types of data processed and the purposes of their processing and refers to the data subjects.',
     // header ARTEN DER VERARBEITETEN DATEN
     'ARTENH1': 'TYPES OF DATA PROCESSED',
     'Price': `• Inventory data (e.g. names, addresses). • Content data (e.g. entries in online forms). • Contact details (e.g. e-mail, telephone numbers). * Meta / communication data (e.g. device information, IP addresses). * Usage data (e.g. websites visited, interest in content, access times)`,
     // header KATEGORIEN BETROFFENER PERSONEN
     'KATEGORIENH1': 'CATEGORIES OF DATA SUBJECTS',
     'Kommunikationspartner': '• Communication partner. • Users (e.g. website visitors, users of online services).',
     // header ZWECKE DER VERARBEITUNG
     'ZWECKEH1': 'PURPOSES OF PROCESSING',
     'Bereitstellung': '* Provision of our online offer and user-friendliness. • Conversion measurement (measuring the effectiveness of marketing measures). • Direct marketing (e.g. by e-mail or post). • Interest-based and behavioral marketing. • Contact requests and communication. • Profiling (creation of user profiles). • Remarketing. • Range measurement (e.g. access statistics, recognition of returning visitors). • Security arrangements. • Tracking (e.g. interest-based/behavioral profiling, use of cookies). • Provision of contractual services and customer service. • Manage and respond to requests.',
     // header MASSGEBLICHE RECHTSGRUNDLAGEN
     'MASSGEBLICHEH1': 'RELEVANT LEGAL BASES',
     'Folgenden': 'In the following, we inform you of the legal bases of the General Data Protection Regulation (GDPR), on the basis of which we process the personal data. Please note that in addition to the provisions of the GDPR, the national data protection regulations may apply in your or our country of residence and domicile. Should more specific legal bases also be decisive in individual cases, we will inform you of these in the data protection declaration. • Consent (Art. 6 para. 1 S. 1 lit. a. GDPR) - The data subject has given his or her consent to the processing of personal data concerning him or her for one or more specific purposes – • Fulfilment of contract and pre-contractual inquiries (Art. 6 para. 1 S. 1 lit. DSGVO) - The processing is necessary for the performance of a contract to which the data subject is a party or to carry out pre-contractual measures at the request of the data subject. • Legitimate interests (Art. 6 para. 1 S. 1 lit. f. GDPR) - The processing is necessary to safeguard the legitimate interests of the controller or a third party, unless the interests or fundamental rights and freedoms of the data subject, which require the protection of personal data, prevail. National data protection regulations in Germany: In addition to the data protection regulations of the General Data Protection Regulation, national data protection regulations in Germany apply. This includes in particular the Act on the Protection against Misuse of Personal data in Data Processing (Federal Data Protection Act – BDSG). In particular, the BDSG contains special provisions on the right to information, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes and transmission as well as automated decision-making in individual cases, including profiling. Furthermore, it regulates data processing for the purposes of the employment relationship (§ 26 BDSG), in particular with regard to the establishment, implementation or termination of employment relationships as well as the consent of employees. Furthermore, state data protection laws of the individual federal states may apply.',
     // header SICHERHEITSMASSNAHMEN
     'SICHERH1': 'SECURITY ARRANGEMENTS',
     'Wir': 'We take appropriate technical and organizational measures in accordance with the legal requirements, taking into account the state of the art, the implementation costs and the nature, scope, circumstances and purposes of the processing as well as the different probabilities of occurrence and the extent of the threat to the rights and freedoms of natural persons, to ensure a level of protection appropriate to the risk. The measures include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical and electronic access to the data as well as the access, input, disclosure, availability and separation of the data concerning them. Furthermore, we have established procedures that ensure the exercise of data subject rights, the deletion of data and reactions to the endangerment of the data. Furthermore, we already take the protection of personal data into account during the development or implementation of our website. Selection of hardware, software and procedures according to the principle of data protection, by technology design and by data protection-friendly presets. Shortening of the IP address: If IP addresses are processed by us or by the service providers and technologies used and the processing of a complete IP address is not necessary, the IP address will be shortened (also referred to as "IP masking"). The last two digits or the last part of the IP address after a period are removed or replaced by placeholders. The purpose of shortening the IP address is to prevent or make it much more difficult to identify a person based on his or her IP address. SSL encryption (https): In order to protect your data transmitted via our online offer, we use SSL encryption. You can recognize such encrypted connections by the prefix https: / / in the address line of your browser.',
     // header ÜBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN
     'BERMITTLUNGH1': 'TRANSMISSION AND DISCLOSURE OF PERSONAL DATA',
     'Rahmen': 'In the context of our processing of personal data, the data may be transmitted to other bodies, companies, legally independent organisational units or persons or disclosed to them. The recipients of this data may include, for example, payment institutions in the context of payment transactions, service providers commissioned with IT tasks or providers of services and content that are integrated into a website. In such a case, we observe the legal requirements and conclude in particular corresponding contracts or contracts. Agreements that serve to protect your data, with the recipients of your data. Data transfer within the Organization: We may transfer personal data to other entities within our organization or provide you with access to such data. If this disclosure is made for administrative purposes, the disclosure of the data is based on our legitimate business and business interests or takes place if it is necessary to fulfill our contractual obligations or if the consent of the data subject or legal permission exists.',
     // header EINSATZ VON COOKIES
     'EINSATZH1': 'USE OF COOKIES',
     'EINSATZH1': 'As part of our online offer, so-called cookies are used. These are data packets that are exchanged between the server of the online offer and the users browser. These are stored by the respective devices used (PC, notebook, tablet, smartphone, etc.) when using the online offer. In this respect, cookies cannot cause any damage to the devices used. In particular, they do not contain viruses or other malware. Information is stored in the cookies, which results in each case in connection with the specifically used end device. Under no circumstances can we obtain direct knowledge of the identity of the visitor to the website. Cookies are mostly accepted according to the basic settings of the browsers. The browser settings can be set up in such a way that cookies are either not accepted on the devices used or that a special notice is given before a new cookie is created. However, it is pointed out that the deactivation of cookies may mean that not all functions of the online offer can be used in the best possible way. The use of cookies serves to make the use of our online offer more comfortable. For example, session cookies can be used to track whether the visitor has already visited individual pages of the website. After leaving the website, these session cookies are automatically deleted. Temporary cookies are used to improve user-friendliness. They are stored on the visitors device for a temporary period of time. When you visit the website again, it is automatically recognized that the visitor has already called up the page at an earlier time and which entries and settings were made in order not to have to repeat them. Cookies are also used to analyze the views of the online offer for statistical purposes and for the purpose of improving the offer. These cookies make it possible to automatically recognize that a website has already been accessed by the visitor when you visit it again. Here, an automatic deletion of cookies takes place after a specified time. Storage period: If we do not provide you with explicit information about the storage period of permanent cookies (e.g. as part of a so-called cookie opt-in), please assume that the storage period can be up to two years. General information on revocation and objection (opt-out): Depending on whether the processing is based on consent or legal permission, you have the option at any time to revoke your consent or to object to the processing of your data by cookie technologies (collectively referred to as "opt-out"). You can first declare your objection by means of the settings of your browser, e.g. by deactivating the use of cookies (whereby the functionality of our online offer can also be restricted). An objection to the use of cookies for online marketing purposes can also be made by means of a variety of services, especially in the case of tracking, via the websites https://optout.aboutads.info and https://www.youronlinechoices.com / be explained. In addition, you may receive further objection notices in the context of the information on the service providers and cookies used. Processing of cookie data on the basis of consent: We use a procedure for cookie consent management, in the context of which the consent of the users in the use of cookies, or the processing and providers mentioned in the context of the cookie consent management procedure, can be obtained and managed and revoked by the users. In this case, the declaration of consent is stored in order not to have to repeat the query again and to be able to prove the consent in accordance with the legal obligation. The storage can take place on the server side and/or in a cookie (so-called opt-in cookie, or with the help of comparable technologies) in order to be able to assign the consent to a user or his device. Subject to individual information on the providers of cookie management services, the following notes apply: The duration of the storage of consent can be up to two years. In this case, a pseudonymous user identifier is formed and stored with the time of consent, information on the scope of the consent (e.g. which categories of cookies and/or service providers) as well as the browser, system and terminal device used. • Types of data processed: usage data (e.g. websites visited, interest in content, access times), meta/communication data (e.g. device information, IP addresses). • Data subjects: Users (e.g. website visitors, users of online services). • Legal basis: Consent (Art. 6 para. 1 S. 1 lit. a.GDPR), legitimate interests (Art. 6 para. 1 S. 1 lit. f.GDPR).',
     // header EINGESETZTE DIENSTE UND DIENSTEANBIETER
     'EINGESETZTEH1': 'SERVICES AND SERVICE PROVIDERS USED',
     'Borlabs': 'Borlabs Cookie: Our online offer uses Borlabs cookie, which sets a technically necessary cookie to store the cookie consent of a user. Borlabs cookies do not process any personal data. The Borlabs cookie stores the consent given by a user when entering a website. If the user wishes to revoke this consent, he can delete the cookie in his browser. When the website is re-entered/reloaded, the user is asked again for his cookie consent.',
     // page Impressum
     // header IMPRESSUM + Diensteanbieter
     'IMPRESSUMH1': 'MASTHEAD',
     'DienstTitle': 'Diensteanbieter',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 3`,
     'Dresden': 'D-01309 Dresden',
     // header Kontaktmöglichkeiten
     'KontaktmgH1': `Contact options`,
     'perm²': 'E-Mail: hello@deinsteindesign.de Контактная форма: https://deinsteindesign.de',
     // header Vertretungberechtigte
     'VertretungberechtigteH1': `Authorized representatives`,
     'Vertretungs': 'Managing Directors: Tina Oehler and Linda Winnie Grumbt Register court: Amtsgericht Dresden Registration number: HRB 40323 VAT identification number: DE335975861',
     // header Inhaltlich Verantwortliche (o.S.d. § 18 Abs. 2 MStV.):
     'InhaltlichH1': `Responsible for content (o.S.d. § 18 Abs. 2 MStV.):`,
     'Tina': 'Tina Oehler Am Steinberg 3 D-01326 Dresden',
     // header Hinweis Nach § 36 VSBG
     'HinweisH1': `Note After § 36 VSBG`,
     'Die': `The platform for online dispute resolution of the EU Commission can be found at http://ec.europa.eu/consumers/odr We are not obliged to participate in a dispute settlement procedure before a consumer arbitration board and are not prepared in principle.`,
     // header Design, Umsetzung
     'DesignH1': `Design, Implementation`,
     'DesignH1': `Puls13-Strategy and Creation GbR https://puls13.com`,
     // header Marketingberatung
     'MarketingH1': `Marketing consultancy`,
     'Anne': `Anne-Kathrin Liebthal https://www.comigo-marketing.de`,
     // header Fotografie
     'FotografieH1': `Photography`,
     'https': `https://get-shot.de`,
     // page Checkout
     // podmenu
     'home': 'Home',
     'Checkout': `Checkout`,
     // header Billing info
     'BillingH1': 'Billing info',
     'Pleaseр2': 'Please enter your billing info',
     'Step': 'Step 1 of 5',
     // data entry
     'First': 'First name',
     'Last': 'Last name',
     'Email': `Email address`,
     'Phone': 'Phone number',
     'Address': `Address`,
     'Town': 'Town / City',
     'Country': `State / Country`,
     'Postal': 'ZIP/Postal code',
     'Ship': 'Ship to a different address?',
     // header Billing method
     'BillH1': 'Billing method',
     'Pleaseр2': 'Please choose the delivery',
     'Step': 'Step 2 of 5',
     // header Payment method
     'PaymentH1': 'Payment method',
     'Pleaseр2': 'Please enter your payment method',
     'Step': 'Step 3 of 5',
     'Credit': 'Credit card',
     'Card': 'Card number',
     'holder': 'Card holder',
     'Expiration': 'Expiration date',
     'CVC': 'CVC',
     'PayPal': 'PayPal',
     'GooglePay ': 'GooglePay ',
     // header Additional informations
     'Additional': 'Additional informations',
     'Need': 'Need something else? We will make it for you!',
     'Step': 'Step 4 of 5',
     'Order': 'Order notes',
     'Need': 'Need a specific delivery day? Sending a gitf? Let’s say ...',
     // header Confirmation
     'ConfirmationH1': 'Confirmation',
     'Weare': 'We are getting to the end. Just few clicks and your order si ready!',
     'Step': 'Step 5 of 5',
     'Agree': 'I agree with sending an Marketing and newsletter emails. No spam.',
     'With': 'I agree with our terms and conditions and privacy policy.',
     'Completebutt': 'Complete order',
     // header All your data are safe
     'Allyour': `All your data are safe`,
     'Weare': `We are using the most advanced security to provide you the best experience ever.`,
     // page stein editor (Bathroom)
     // menu
     'home': 'Home',
     'DeinSteinDesign': `DeinSteinDesign`,
     'Tiles': `Tiles`,
     'PRINT': `PRINT AND EXPORT`,
     'DeinSteinDesign': `DeinSteinDesign`,
     'CLOSE': `CLOSE EDITOR`,
     // menuleft
     'Bathroom': 'Bathroom',
     'Slab': `Slab size`,
     'Bohrung': `Hole`,
     'Ausschnitt': `Neckline`,
     'Ausklinkung': `Detaching`,
     'Armierung': `Reinforcement`,
     'Kitchen': `Kitchen`,
     'Windowsill': `Windowsill`,
     'Table': `Table`,
     'Stairs': `Stairs`,
     'ZOOM': `ZOOM IN`,
     'ZOOMOUT': `ZOOM OUT`,
     'mm': 'mm',
     // menuright
     'Set': 'Set the slab size',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'APPLY': `APPLY`,
     'Fixing': `Fixing the size`,
     'This': `This parameter allows you to fix the tile size.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
     // menuright (Bohrung)
     'Set': 'Set the diameter hole',
     '1000mm': `1000 mm = 1 mt`,
     'Diameter': `Diameter`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Fixingdiameter': `Fixing the diameter`,
     'parameter': `This parameter allows you to fix the diameter of the cutout.`,
     'Cost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
     // menuright (Ausschnitt)
     'Set': 'Set the size and rounding of the edges Neckline',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'Corner': `Corner`,
     'Crop': `Crop`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Cost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
     // menuright (Ausklinkung)
     'Set': 'Set the detaching size',
     '1000mm': `1000 mm = 1 mt`,
     'Side A': `Side A`,
     'Side B': `Side B`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Fixing size': `Fixing size`,
     'Thisparameter': `This parameter allows you to fix the size of the Ausklinkung.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
     // menuright (Ausklinkung)
     'Set': 'Set the detaching size',
     '1000mm': `1000 mm = 1 mt`,
     'Side A': `Side A`,
     'Side B': `Side B`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Fixing size': `Fixing size`,
     'Thisparameter': `This parameter allows you to fix the size of the Ausklinkung.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
     // menuright (Armierung)
     'Armierung': 'Reinforcement',
     'recomend': `We recommend a reinforcement for cutouts for e.g. the sink and an edge thickness less than 10cm`,
     'cost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
     // page stein editor (Windowsill)
     // menu
     'home': 'Home',
     'DeinSteinDesign': `DeinSteinDesign`,
     'Tiles': `Tiles`,
     'PRINT': `PRINT AND EXPORT`,
     'DeinSteinDesign': `DeinSteinDesign`,
     'CLOSE': `CLOSE EDITOR`,
     // menuleft
     'Bathroom': 'Bathroom',
     'Kitchen': `Kitchen`,
     'Windowsill': `Windowsill`,
     'Windowsillsize': `Window sill size`,
     'Polierte': `Polished edge`,
     'Ausklinkung': `Detaching`,
     'Armierung': `Reinforcement`,
     'Table': `Table`,
     'Stairs': `Stairs`,
     'ZOOM': `ZOOM IN`,
     'ZOOMOUT': `ZOOM OUT`,
     'mm': 'mm',
     // menuright (Windowsill)
     'Set': 'Set the detaching size',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'APPLY': `APPLY`,
     'Fixing size': `Fixing size`,
     'Thiswind': `This parameter allows you to fix the size of the window sill.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
     // page stein editor (Table)
     // menu
     'home': 'Home',
     'DeinSteinDesign': `DeinSteinDesign`,
     'Tiles': `Tiles`,
     'PRINT': `PRINT AND EXPORT`,
     'DeinSteinDesign': `DeinSteinDesign`,
     'CLOSE': `CLOSE EDITOR`,
     // menuleft
     'Bathroom': 'Bathroom',
     'Kitchen': `Kitchen`,
     'Windowsill': `Windowsill`,
     'Table': `Table`,
     'Tablesize': `Table size`,
     'Armierung': `Reinforcement`,
     'Stairs': `Stairs`,
     'ZOOM': `ZOOM IN`,
     'ZOOMOUT': `ZOOM OUT`,
     'mm': 'mm',
     // menuright (Table)
     'Settable': 'Set the table size',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'APPLY': `APPLY`,
     'Fixing size': `Fixing size`,
     'Thiswind': `This parameter allows you to fix the size of the window sill.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     '€': `€`,
     'PAY': `TO PAY`,
    },
  
  
    deu: {
      // introsec
      'homeH1': 'Erstellen Sie ein Fliesendesign für sich',
      'descHomeIntro': `Und so funktioniert es:Wählen Sie Ihren Stein, wählen Sie Ihr Design, geben Sie Ihren Namen ein, Sie bestellen und wir liefern.`,
      'toTheShop': 'ZUM SHOP',
      // menu
      'home': 'Startseite',
      'DeinSteinDesign': 'DeinSteinDesign',
      'tiles': 'Kacheln',
      'phSeacrh': 'Was sucht ihr?',
      // recsec
      'resSecTitle': 'Empfehlungen für Sie',
      'mk': 'Moderne Küchen',
      'descMk': 'Leichte Fliesen für die Küche mit einem schönen Finish für einen einzigartigen, hochmodernen Stil.',
      'tk': 'Traditionelle Küchen',
      'descTk': 'Die gealterten hellen Töne der Fliesen machen traditionelle Küchen zu einer beliebten Wahl in Landhäusern.',
      'mB': 'Minimalistische Badezimmer',
      'descmB': 'Dunkle Fliesentöne machen das Badezimmerinnere teuer und betonen den Minimalismus.',
      'h-tB': 'High-tech-Badezimmer',
      'descH-tB': 'Die Grautöne der Fliesen machen die Form des Badezimmers strenger, klarer und prägnanter.',
      'viewAll': 'ALLE ANZEIGEN',
      // create desing sec
      'creatteDesTitle': 'Erstellen Sie Ihr eigenes Fliesendesign',
      'creatteDesDesc': `Das Erstellen von Kacheln für Ihre Größe ist das, was wir am besten können-wir zeigen Ihnen, wie Sie anfangen können…`,
      'createtNow': 'JETZT ERSTELLEN',
      // will be interested
      'wbiTitle': 'Sie werden interessiert sein',
      'wbiItem1Title': 'Neue Fliesen im DeinSteinDesign',
      'wbiItem1Desc': 'Schauen Sie sich die neuen Fliesen im DeinSteinDesign.',
      'wbiItem2Title': 'Fliesen zu erschwinglichen Preisen',
      'wbiItem2Desc': 'Sehen Sie eine Auswahl verschiedener Stile zu erschwinglichen Preisen.',
      'wbiItem3Title': 'Erstellen Sie ein Fliesendesign mit einem Ausschnitt für die Spüle',
      'wbiItem3Desc': 'Erstellen Sie mit Hilfe unseres Editors Ihr eigenes Fliesendesign mit einem Ausschnitt für die Spüle.',
      'readMore': 'LESEN SIE MEHR',
      // footer
     'Navigation': 'Navigation',
     'Home': `Startseite`,
     'deinsteindesign': 'DeinSteinDesign',
     'KITCHEN': 'Kacheln',
     'Copyright': `Copyright © 2021 DeinSteinDesign. Alle Rechte vorbehalten.`,
     'Datenschutzerklärung': 'Datenschutzerklärung',
     'Impressum': 'Impressum',
     'Connections': `Verbindungen`,
     'Facebook': 'Facebook',
     'Twitter': 'Twitter',
     'Instagram': `Instagram`,
     'Youtube': 'Youtube',
     'Account': 'Konto',
     'Your account': `Ihr Konto`,
     'Returns Centre': 'Zentrum für Rücksendungen',
     'protection': '100 % iger Kaufschutz',
     'Help': `Hilfe`,
     // page DeinSteinDesign
     // podmenu
     'home': 'Startseite',
     'deinsteindesign': `DeinSteinDesign`,
     'HeadingH1': 'Erstellen Dein Stein Design',
     'Subtitle': `Wir von DeinSteinDesign sind stolz darauf, unseren Kunden bei der Auswahl der perfekten Fliesenform für ihre Küchen, Bäder, Treppen und Fensterbänke zu helfen. Mit Hilfe unseres Flieseneditors erstellen Sie Ihre eigene Fliese in der gewünschten Größe.`,
     // filter  
     'slabs': 'Platten für',
     'bathroom': 'Bad',
     'Kitchen': `Küche`,
     'Stairs': 'Treppe',
     'Windowsill': 'Fensterbank',
     'Material': `Material`,
     'granite': `Granit`,
     'marble': `Marmor`,
     'basalt': `Basalt`,
     'Matcolor': `Farbe des Materials`,
     'View': 'Alle Farben anzeigen',
     // list
     'Basalt3': 'Basalt stein “MUSTER”',
     'Shower': `Duschwanne Silber Sparkie Granitstein Lieferzeit 1-3 Wochen`,
     'buttonEDITOR': 'STEIN REDAKTION',
     'Marbleh3': 'Marble stone “MUSTER”',
     'Shower': `Duschwanne Silber Sparkie Granitstein Lieferzeit 1-3 Wochen`,
     'buttonEDITOR': 'STEIN REDAKTION',
     // page Tiles
     // podmenu
     'home': 'Startseite',
     'Tiles': `Kacheln`,
     'HeadingH1': 'Alle unsere Fliesen',
     'Subtitle': `Wir von DeinSteinDesign sind stolz darauf, unseren Kunden zu helfen, die perfekte Fliese für ihr Badezimmer zu finden. Mit unserem inspirierenden Sortiment werden Sie das Bad Ihrer Träume gestalten.`,
     // filter  
     'Types': 'Arten von Fliesen',
     'Bicotura': 'Bicotura',
     'Monocot': `Monocot`,
     'Porcelain tile': 'Porcelain tile',
     'Cotto': 'Cotto',
     'Cottoforte': `Cottoforte`,
     'Clinker': 'Clinker',
     'Clinker': 'Majolica',
     'Color': 'Farbe der Fliese',
     'View': 'Alle Farben anzeigen',
     'Price': `Preis, €`,
     // list
     'Graniteh3': 'Granit fliese “MUSTER”',
     'Shower': `Duschwanne Silber Sparkie Granitstein Lieferzeit 1-3 Wochen`,
     'perm²': 'Preis pro m²',
     '€ 75': '€ 75',
     'Stockpcs': 'Lagerbestand: 320 Stück',
     'buttonEDITOR': 'KACHEL REDAKTION',
     // page Datenschutzerklärung
     // header DATENSCHUTZERKLÄRUNG + EINLEITUNG
     'DATEN': 'DATENSCHUTZERKLÄRUNG',
     'EINLEITUNG': `EINLEITUNG`,
     'Mitder ': 'Mit der folgenden Datenschutzerklärung möchten wir, die Bakuli GmbH, Am Steinberg 13, 01309 Dresden, Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als „Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als „Onlineangebot“). Die folgenden Bestimmungen informieren Sie über Art, Umfang, Dauer und Zweck der Verarbeitung personenbezogener Daten durch uns als verantwortlicher Anbieter dieser Website sowie über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten, datenschutzrelevanten Fremdkomponenten. Wir haben zahlreiche technische, vertragliche und organisatorische Maßnahmen getroffen, um sicher zu stellen, dass die geltenden datenschutzrechtlichen Vorschriften eingehalten werden und um damit die durch uns verwalteten Daten vor zufälliger oder vorsätzlicher Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Bitte beachten Sie dennoch, dass internetbasierte Datenübertragungen (z.B. die Kommunikation per E-Mail) grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln. Die verwendeten Begriffe sind nicht geschlechtsspezifisch.',
     // header VERANTWORTLICHER  
     'VERANTWORTLICHER': 'VERANTWORTLICHER',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header VERTRETUNGSBERECHTIGTE PERSONEN
     'PERSONEN': 'VERTRETUNGSBERECHTIGTE PERSONEN',
     'Tina': `Tina Oehler & Linda Winnie Grumbt`,
     'EMail': 'E-Mail: hello@deinsteindesign.de',
     // header ÜBERSICHT DER VERARBEITUNGEN
     'VERARBEITUNGEN': 'ÜBERSICHT DER VERARBEITUNGEN',
     'Die': 'Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.',
     // header ARTEN DER VERARBEITETEN DATEN
     'ARTENH1': 'ARTEN DER VERARBEITETEN DATEN',
     'Price': `• Bestandsdaten (z.B. Namen, Adressen). • Inhaltsdaten (z.B. Eingaben in Onlineformularen). • Kontaktdaten (z.B. E-Mail, Telefonnummern). • Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen). • Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)`,
     // header KATEGORIEN BETROFFENER PERSONEN
     'KATEGORIENH1': 'KATEGORIEN BETROFFENER PERSONEN',
     'Kommunikationspartner': '• Kommunikationspartner. • Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).',
     // header ZWECKE DER VERARBEITUNG
     'ZWECKEH1': 'ZWECKE DER VERARBEITUNG',
     'Bereitstellung': '• Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit. • Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen). • Direktmarketing (z.B. per E-Mail oder postalisch). • Interessenbasiertes und verhaltensbezogenes Marketing. • Kontaktanfragen und Kommunikation. • Profiling (Erstellen von Nutzerprofilen). • Remarketing. • Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher). • Sicherheitsmaßnahmen. • Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies). • Erbringung vertragliche Leistungen und Kundenservice. • Verwaltung und Beantwortung von Anfragen.',
     // header MASSGEBLICHE RECHTSGRUNDLAGEN
     'MASSGEBLICHEH1': 'MASSGEBLICHE RECHTSGRUNDLAGEN',
     'Folgenden': 'Im Folgenden teilen wir die Rechtsgrundlagen der Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass zusätzlich zu den Regelungen der DSGVO die nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit. • Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO) – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie   betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben. • Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO) – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen. • Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO) – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.  Nationale Datenschutzregelungen in Deutschland: Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.',
     // header SICHERHEITSMASSNAHMEN
     'SICHERH1': 'SICHERHEITSMASSNAHMEN',
     'Wir': 'Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen. Kürzung der IP-Adresse: Sofern IP-Adressen von uns oder von den eingesetzten Dienstleistern und Technologien verarbeitet werden und die Verarbeitung einer vollständigen IP-Adresse nicht erforderlich ist, wird die IP-Adresse gekürzt (auch als „IP-Masking“ bezeichnet). Hierbei werden die letzten beiden Ziffern, bzw. der letzte Teil der IP-Adresse nach einem Punkt entfernt, bzw. durch Platzhalter ersetzt. Mit der Kürzung der IP-Adresse soll die Identifizierung einer Person anhand ihrer IP-Adresse verhindert oder wesentlich erschwert werden. SSL-Verschlüsselung (https): Um Ihre via unser Online-Angebot übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.',
     // header ÜBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN
     'BERMITTLUNGH1': 'ÜBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN',
     'Rahmen': 'Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab. Datenübermittlung innerhalb der Organisation: Wir können personenbezogene Daten an andere Stellen innerhalb unserer Organisation übermitteln oder ihnen den Zugriff auf diese Daten gewähren. Sofern diese Weitergabe zu administrativen Zwecken erfolgt, beruht die Weitergabe der Daten auf unseren berechtigten unternehmerischen und betriebswirtschaftlichen Interessen oder erfolgt, sofern sie Erfüllung unserer vertragsbezogenen Verpflichtungen erforderlich ist oder wenn eine Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.',
     // header EINSATZ VON COOKIES
     'EINSATZH1': 'EINSATZ VON COOKIES',
     'EINSATZH1': 'Im Rahmen unseres Online-Angebots werden sog. Cookies eingesetzt. Das sind Datenpakete, die zwischen dem Server des Online-Angebots und dem Browser des Nutzers ausgetauscht werden. Diese werden bei der Nutzung des Online-Angebots von den jeweils verwendeten Geräten (PC, Notebook, Tablet, Smartphone etc.) gespeichert. Cookies können insoweit keine Schäden auf den verwendeten Geräten anrichten. Insbesondere enthalten sie keine Viren oder sonstige Schadsoftware. In den Cookies werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Wir können damit keinesfalls unmittelbar Kenntnis von der Identität des Besuchers der Webseite erhalten. Cookies werden nach den Grundeinstellungen der Browser größtenteils akzeptiert. Die Browsereinstellungen können so eingerichtet werden, dass Cookies entweder auf den verwendeten Geräten nicht akzeptiert werden oder dass jeweils ein besonderer Hinweis erfolgt, bevor ein neuer Cookie angelegt wird. Es wird allerdings darauf hingewiesen, dass die Deaktivierung von Cookies dazu führen kann, dass nicht alle Funktionen des Online-Angebots bestmöglich genutzt werden können. Der Einsatz von Cookies dient dazu, die Nutzung unseres Online-Angebots komfortabler zu gestalten. So kann beispielsweise anhand von Session-Cookies nachvollzogen werden, ob der Besucher einzelne Seiten der Webseite bereits besucht hat. Nach Verlassen der Webseite werden diese Session-Cookies automatisch gelöscht. Zur Verbesserung der Benutzerfreundlichkeit werden temporäre Cookies eingesetzt. Sie werden für einen vorübergehenden Zeitraum auf dem Gerät des Besuchers gespeichert. Bei erneutem Besuch der Webseite wird automatisch erkannt, dass der Besucher die Seite bereits zu einem früheren Zeitpunkt aufgerufen hat und welche Eingaben und Einstellungen dabei vorgenommen wurden, um diese nicht wiederholen zu müssen. Der Einsatz von Cookies erfolgt außerdem, um die Aufrufe des Online-Angebots zu statistischen Zwecken und zum Zwecke der Verbesserung des Angebotes zu analysieren. Diese Cookies ermöglichen es, bei einem erneuten Besuch automatisch zu erkennen, dass eine Website bereits zuvor vom Besucher aufgerufen wurde. Hier erfolgt nach einer jeweils festgelegten Zeit eine automatische Löschung der Cookies. Speicherdauer: Sofern wir Ihnen keine expliziten Angaben zur Speicherdauer von permanenten Cookies mitteilen (z. B. im Rahmen eines sog. Cookie-Opt-Ins), gehen Sie bitte davon aus, dass die Speicherdauer bis zu zwei Jahre betragen kann. Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): Abhängig davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit, eine erteilte Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen (zusammenfassend als „Opt-Out“ bezeichnet). Sie können Ihren Widerspruch zunächst mittels der Einstellungen Ihres Browsers erklären, z.B., indem Sie die Nutzung von Cookies deaktivieren (wobei hierdurch auch die Funktionsfähigkeit unseres Onlineangebotes eingeschränkt werden kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch mittels einer Vielzahl von Diensten, vor allem im Fall des Trackings, über die Webseiten https://optout.aboutads.info und https://www.youronlinechoices.com/ erklärt werden. Daneben können Sie weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies erhalten. Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen werden können. Hierbei wird die Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut wiederholen zum müssen und die Einwilligung entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können. Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten, gelten die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen. Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser, System und verwendeten Endgerät gespeichert. • Verarbeitete Datenarten: Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen). • Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten). • Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).',
     // header EINGESETZTE DIENSTE UND DIENSTEANBIETER
     'EINGESETZTEH1': 'EINGESETZTE DIENSTE UND DIENSTEANBIETER',
     'Borlabs': 'Borlabs Cookie: Unser Onlineangebot verwendet Borlabs Cookie, das ein technisch notwendiges Cookie setzt, die Cookie-Einwilligungen eines Nutzers zu speichern. Borlabs Cookies verarbeiten keinerlei personenbezogenen Daten. Im Borlabs Cookie wird die Einwilligungen gespeichert, die ein Nutzer beim Betreten einer Website gegeben hat. Möchte der Nutzer diese Einwilligungen widerrufen, kann er das Cookie in seinem Browser löschen. Wenn die Website neu betreten/neu geladen wird, wird der Nutzer erneut nach seiner Cookie-Einwilligung gefragt.',
     // page Impressum
     // header IMPRESSUM + Diensteanbieter
     'IMPRESSUMH1': 'IMPRESSUM',
     'DienstTitle': 'Diensteanbieter',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 3`,
     'Dresden': 'D-01309 Dresden',
     // header Kontaktmöglichkeiten
     'KontaktmgH1': `Kontaktmöglichkeiten`,
     'perm²': 'E-Mail: hello@deinsteindesign.de Контактная форма: https://deinsteindesign.de',
     // header Vertretungberechtigte
     'VertretungberechtigteH1': `Vertretungberechtigte`,
     'Vertretungs': 'Vertretungsberechtigte Geschäftsführer: Tina Oehler und Linda Winnie Grumbt Registergericht: Amtsgericht Dresden Registernummer: HRB 40323 Umsatzsteueridentifikationsnummer: DE335975861',
     // header Inhaltlich Verantwortliche (o.S.d. § 18 Abs. 2 MStV.):
     'InhaltlichH1': `Inhaltlich Verantwortliche (o.S.d. § 18 Abs. 2 MStV.):`,
     'Tina': 'Tina Oehler Am Steinberg 3 D-01326 Dresden',
     // header Hinweis Nach § 36 VSBG
     'HinweisH1': `Hinweis Nach § 36 VSBG`,
     'Die': `Die Plattform zur Online-Streitbeilegung der EU-Kommission finden Sie unter http://ec.europa.eu/consumers/odr Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und grundsätzlich nicht bereit.`,
     // header Design, Umsetzung
     'DesignH1': `Design, Umsetzung`,
     'DesignH1': `Puls13-Strategy and Creation GbR https://puls13.com`,
     // header Marketingberatung
     'MarketingH1': `Marketingberatung`,
     'Anne': `Anne-Kathrin Liebthal https://www.comigo-marketing.de`,
     // header Fotografie
     'FotografieH1': `Fotografie`,
     'https': `https://get-shot.de`,
     // page Checkout
     // podmenu
     'home': 'Startseite',
     'Checkout': `Kasse`,
     // header Billing info
     'BillingH1': 'Informationen zur Rechnungsstellung',
     'Pleaseр2': 'Bitte geben Sie Ihre Rechnungsdaten ein',
     'Step': 'Schritt 1 von 5',
     // data entry
     'First': 'Vornamen',
     'Last': 'Nachname',
     'Email': `E-Mail Adresse`,
     'Phone': 'Rufnummer',
     'Address': `Adresse`,
     'Town': 'Stadt / Ortschaft',
     'Country': `Staat / Land`,
     'Postal': 'ZIP/Postleitzahl',
     'Ship': 'Versand an eine andere Adresse?',
     // header Billing method
     'BillH1': 'Methode der Rechnungsstellung',
     'Pleaseр2': 'Bitte wählen Sie die Lieferung',
     'Step': 'Schritt 2 von 5',
     // header Payment method
     'PaymentH1': 'Zahlungsmethode',
     'Pleaseр2': 'Bitte geben Sie Ihre Zahlungsmethode ein',
     'Step': 'Schritt 3 von 5',
     'Credit': 'Kreditkarte',
     'Card': 'Kartennummer',
     'holder': 'Kartenhalter',
     'Expiration': 'Verfallsdatum',
     'CVC': 'CVC',
     'PayPal': 'PayPal',
     'GooglePay ': 'GooglePay ',
     // header Additional informations
     'Additional': 'Zusätzliche Informationen',
     'Need': 'Sie brauchen etwas anderes? Wir machen es für Sie!',
     'Step': 'Schritt 4 von 5',
     'Order': 'Hinweise zur Bestellung',
     'Need': 'Benötigen Sie einen bestimmten Liefertag? Ein Gitf verschicken? Sagen wir ...',
     // header Confirmation
     'ConfirmationH1': 'Konfirmation',
     'Weare': 'Wir sind am Ende angelangt. Nur noch wenige Klicks und Ihre Bestellung ist fertig!',
     'Step': 'Schritt 5 von 5',
     'Agree': 'Ich bin damit einverstanden, Marketing- und Newsletter-E-Mails zu versenden. Kein Spam.',
     'With': 'Ich bin mit unseren Allgemeinen Geschäftsbedingungen und der Datenschutzerklärung einverstanden.',
     'Completebutt': 'Bestellen',
     // header All your data are safe
     'Allyour': `Alle Ihre Daten sind sicher`,
     'Weare': `Wir verwenden die fortschrittlichste Sicherheit, um Ihnen die beste Erfahrung aller Zeiten zu bieten.`,
    },
  
    ru: {
      // introsec
      'homeH1': 'Создайте дизайн плитки для себя',
      'descHomeIntro': `И вот как это работает: Выберите свой камень, выберите свой дизайн, введите свой вариант, Вы заказываете, и мы доставляем.`,
      'toTheShop': 'В МАГАЗИН',
      // menu
      'home': 'Главная',
      'DeinSteinDesign': 'Дизайн камня',
      'tiles': 'Плитки',
      'phSeacrh': 'Что вы ищите?',
      // recsec
      'resSecTitle': 'Рекомендации для вас',
      'mk': 'Современные Кухни',
      'descMk': 'Светлая плитка для кухни с красивой отделкой в уникальном, ультрасовременном стиле.',
      'tk': 'Традиционные Кухни',
      'descTk': 'Выдержанные светлые тона плитки делают традиционные кухни популярным выбором в загородных домах.',
      'mB': 'Ванные комнаты в минималистичном стиле',
      'descmB': 'Темные тона плитки сделают интерьер ванной комнаты дорогим и подчеркнут минимализм.',
      'h-tB': 'Высокотехнологичные ванные комнаты',
      'descH-tB': 'Серые тона плитки сделают форму ванной комнаты более строгой, четкой и лаконичной.',
      'viewAll': 'ПРОСМОТРЕТЬ ВСЕ',
      // create desing sec
      'creatteDesTitle': 'Создайте свой собственный дизайн плитки',
      'creatteDesDesc': `Создание плиток по вашему размеру - это то, что мы делаем лучше всего - давайте покажем вам, как начать…`,
      'createtNow': 'СОЗДАТЬ СЕЙЧАС',
      // will be interested
      'wbiTitle': 'Вам будет интересно',
      'wbiItem1Title': 'Новые плитки в DeinSteinDesign',
      'wbiItem1Desc': 'Ознакомьтесь с новыми плитками в ассортименте в DeinSteinDesign',
      'wbiItem2Title': 'Плитка по доступным ценам',
      'wbiItem2Desc': 'Посмотрите подборку различных стилей по доступным ценам.',
      'wbiItem3Title': 'Создайте дизайн плитки с вырезом для раковины',
      'wbiItem3Desc': 'Создайте свой собственный дизайн плитки с вырезом для раковины с помощью нашего редактора.',
      'readMore': 'ПОДРОБНЕЕ',
      'wbiItem4Title': 'Натуральный гранит по привлекательным ценам',
      'wbiItem4Desc': 'Доступны термообработанные гранитные плиты, которые имеют неограниченные возможности для использования.',
      'wbiItem5Title': 'Мраморные облицовочные плиты',
      'wbiItem5Desc': 'В каталоге вы можете выбрать плиты с различной поверхностью в зависимости от способа обработки.',
     // footer
     'Navigation': 'Навигация',
     'Home': `Главная`,
     'deinsteindesign': 'Дизайн камня',
     'KITCHEN': 'Плитки',
     'Copyright': `Copyright © 2021 DeinSteinDesign. Все права защищены.`,
     'Datenschutzerklärung': 'Политика конфиденциальности',
     'Impressum': 'Пользовательское соглашение',
     'Connections': `Соц.сети`,
     'Facebook': 'Facebook',
     'Twitter': 'Twitter',
     'Instagram': `Instagram`,
     'Youtube': 'Youtube',
     'Account': 'Аккаунт',
     'Your account': `Ваш аккаунт`,
     'Returns Centre': 'Центр возврата',
     'protection': '100% защита покупок',
     'Help': `Помощь`,
     // page DeinSteinDesign
     // podmenu
     'home': 'Главная',
     'deinsteindesign': `Дизайн камня`,
     'HeadingH1': 'Создайте свой каменный дизайн',
     'Subtitle': `В DeinSteinDesign мы гордимся тем, что помогаем клиентам выбрать идеальную форму камня для их кухонь, ванных комнат, лестниц и подоконников. С помощью нашего редактора камня вы создадите форму камня для себя.`,
     // filter  
     'slabs': 'Камень для',
     'bathroom': 'Ванная',
     'Kitchen': `Кухня`,
     'Stairs': 'Лестница',
     'Windowsill': 'Подоконник',
     'Material': `Материал`,
     'View': 'Просмотреть все цвета',
     // list
     'Basalt3': 'Базальный камень “MUSTER”',
     'Shower': `Камень базальт для душа серебристый блестящий. Срок поставки 1-3 недели`,
     'buttonEDITOR': 'Редактор камня',
     'Marbleh3': 'Мраморный камень “MUSTER”',
     'Shower': `Мраморный камень для душа серебристый блестящий. Срок поставки 1-3 недели`,
     'buttonEDITOR': 'Редактор камня',
     // page Tiles
     // podmenu
     'home': 'Главная',
     'Tiles': `Плитка`,
     'HeadingH1': 'Все наши плитки',
     'Subtitle': `В DeinSteinDesign мы гордимся тем, что помогаем клиентам найти идеальную плитку для своих ванных комнат. С нашим вдохновляющим ассортиментом вы создадите ванную комнату своей мечты.`,
     // filter  
     'Types': 'Типы плиток',
     'Bicotura': 'Bicotura',
     'Monocot': `Monocot`,
     'Porcelain tile': 'Porcelain tile',
     'Cotto': 'Cotto',
     'Cottoforte': `Cottoforte`,
     'Clinker': 'Clinker',
     'Clinker': 'Majolica',
     'Color': 'Цвет плитки',
     'View': 'Просмотреть все цвета',
     'Price': `Цена, ₽`,
     // list
     'Graniteh3': 'Гранитная плитка “MUSTER”',
     'Shower': `Гранитная плитка  для душа серебристая, блестящая. Срок поставки 1-3 недели`,
     'perm²': 'Цена за м²',
     '€ 75': '₽ 6 750',
     'Stockpcs': 'Осталось: 320 шт.',
     'buttonEDITOR': 'Редактор плитки',
     // page Datenschutzerklärung
     // header DATENSCHUTZERKLÄRUNG + EINLEITUNG
     'DATEN': 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
     'EINLEITUNG': `ВВЕДЕНИЕ`,
     'Mitder ': 'Используя следующую политику конфиденциальности, мы, DeinSteinDesign, По адресу Steinberg 13, 01309 Дрезден, хотели бы проинформировать вас о том, какие типы ваших персональных данных (также кратко называемые „Данными“ ниже) мы обрабатываем для каких целей и в каком объеме. Политика конфиденциальности применяется ко всей обработке персональных данных, которую мы осуществляем, как в рамках предоставления наших услуг, так и, в частности, на наших веб-сайтах, в мобильных приложениях и в рамках внешних онлайн-прессингов, таких как наши профили в социальных сетях (далее подытожим, что называется "онлайн-предложение"). В следующих положениях вы узнаете о характере, объеме, продолжительности и цели обработки персональных данных нами как ответственным поставщиком данного веб-сайта, а также о сторонних компонентах, связанных с конфиденциальностью, которые мы используем в целях оптимизации и повышения качества использования. Мы приняли многочисленные технические, договорные и организационные меры для обеспечения соблюдения применимых правил конфиденциальности и, таким образом, для защиты данных, которыми мы управляем, от случайных или преднамеренных манипуляций, потери, уничтожения или от доступа несанкционированных лиц. Тем не менее, обратите внимание, что передача данных через Интернет (например, связь по электронной почте) в основном имеет уязвимости, поэтому абсолютная защита не может быть гарантирована. По этой причине любое заинтересованное лицо может также свободно передавать нам персональные данные альтернативными способами, например, по телефону. Используемые термины не зависят от пола.',
     // header VERANTWORTLICHER  
     'VERANTWORTLICHER': 'ОТВЕТСТВЕННОСТЬ',
     'GmbH': 'ООО DeinSteinDesign',
     'Steinberg': `Улица Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header VERTRETUNGSBERECHTIGTE PERSONEN
     'PERSONEN': 'УПОЛНОМОЧЕННЫЕ ПРЕДСТАВИТЕЛИ',
     'Tina': `Tina Oehler & Linda Winnie Grumbt`,
     'EMail': 'E-Mail: hello@deinsteindesign.de',
     // header ÜBERSICHT DER VERARBEITUNGEN
     'VERARBEITUNGEN': 'ОБЗОР ОБРАБОТКИ',
     'Die': 'В приведенном ниже обзоре суммируются типы обрабатываемых данных и цели их обработки, а также указываются заинтересованные лица.',
     // header ARTEN DER VERARBEITETEN DATEN
     'ARTENH1': 'ТИПЫ ОБРАБАТЫВАЕМЫХ ДАННЫХ',
     'Price': `• Данные о запасах (например, имена, адреса). • Данные контента (например, входные данные в онлайн-формах). • Контактные данные (например, электронная почта, номера телефонов). • Мета - / коммуникационные данные (например, информация об устройстве, IP-адреса). • Данные об использовании (например, посещенные веб-сайты, интерес к контенту, время доступа)`,
     // header KATEGORIEN BETROFFENER PERSONEN
     'KATEGORIENH1': 'КАТЕГОРИИ ЗАТРОНУТЫХ ЛЮДЕЙ',
     'Kommunikationspartner': '• Партнеры по общению. • Пользователи (например, посетители веб-сайта, пользователи онлайн-сервисов).',
     // header ZWECKE DER VERARBEITUNG
     'ZWECKEH1': 'ЦЕЛИ ОБРАБОТКИ',
     'Bereitstellung': '• Предоставление нашего онлайн-предложения и удобство использования. • Измерение конверсии (измерение эффективности маркетинговых действий). • Прямой маркетинг (например, по электронной почте или по почте). • Маркетинг на основе интересов и поведения. • Запросы на контакты и общение. * Профилирование (создание профилей пользователей). * Ремаркетинг • • Измерение дальности (например, статистика доступа, обнаружение повторяющихся посетителей). • Меры безопасности. * Отслеживание (например, профилирование интересов/поведения, использование файлов cookie). • Предоставление договорных услуг и обслуживание клиентов. • Управление и ответ на запросы.',
     // header MASSGEBLICHE RECHTSGRUNDLAGEN
     'MASSGEBLICHEH1': 'МАССОВЫЕ ПРАВОВЫЕ ОСНОВЫ',
     'Folgenden': 'Ниже мы сообщаем правовые основы Основного положения о защите данных (GDPR), на основе которых мы обрабатываем персональные данные. Пожалуйста, обратите внимание, что в дополнение к правилам GDPR национальные правила конфиденциальности могут применяться в вашей или нашей стране проживания и проживания. Кроме того, в отдельных случаях, если более специальные правовые основы имеют решающее значение, мы сообщим вам об этом в Политике конфиденциальности. • Согласие (статья 6 абс. 1 стр. 1 лит. a. GDPR) - Заинтересованное лицо дало свое согласие на обработку персональных данных, касающихся вас, для конкретной цели или нескольких конкретных целей. • Выполнение контрактов и предварительные запросы (статья 6 абс. 1 с. 1 лит. b.GDPR) – Обработка необходима для выполнения контракта, стороной которого является заинтересованное лицо, или для выполнения предварительных договорных действий, которые производятся по запросу заинтересованного лица. * Законные интересы (статья 6 п. 1 ст. 1 лит. f. GDPR) – Обработка необходима для защиты законных интересов ответственного лица или третьей стороны, если интересы или основные права и основные свободы заинтересованного лица, требующие защиты персональных данных, не перевешивают. Германия Германия: В дополнение к Основным правилам защиты данных в Германии применяются национальные правила защиты данных. Это, в частности, включает в себя Закон о защите от неправильного использования персональных данных при обработке данных (Федеральный закон о защите данных – BDSG). В частности, BDSG содержит специальные правила о праве на получение информации, праве на удаление, праве на возражение, обработке особых категорий персональных данных, обработке для других целей и передаче, а также автоматизированном принятии решений в отдельных случаях, включая профилирование. Кроме того, он регулирует обработку данных для целей трудовых отношений (§ 26 BDSG), особенно в отношении обоснования, осуществления или прекращения трудовых отношений, а также согласия сотрудников. Кроме того, могут применяться законы о защите данных штата каждого штата.',
     // header SICHERHEITSMASSNAHMEN
     'SICHERH1': 'МЕРЫ БЕЗОПАСНОСТИ',
     'Wir': 'Мы принимаем соответствующие технические и организационные меры в соответствии с требованиями законодательства с учетом уровня техники, затрат на внедрение и характера, объема, обстоятельств и целей обработки, а также различных вероятностей входа и степени угрозы правам и свободам физических лиц, чтобы обеспечить уровень защиты, соответствующий риску. Меры включают, в частности, обеспечение конфиденциальности, целостности и доступности данных путем контроля физического и электронного доступа к данным, а также доступа, ввода, передачи, обеспечения доступности и их разделения. Кроме того, мы создали процедуры, которые обеспечивают соблюдение затронутых прав, удаление данных и реагирование на угрозу данных. Кроме того, мы учитываем защиту персональных данных уже при разработке или разработке. Выбор оборудования, программного обеспечения и процедур в соответствии с принципом конфиденциальности, с помощью технического дизайна и с помощью предустановок, дружественных к конфиденциальности. Сокращение IP-адреса: если IP-адреса обрабатываются нами или поставщиками услуг и технологиями, которые используются, и обработка полного IP-адреса не требуется, IP-адрес сокращается (также известный как“ маскировка IP"). При этом используются последние две цифры, или последние две цифры. последняя часть IP-адреса удаляется после точки или заменяется заполнителями. Сокращение IP-адреса призвано предотвратить или значительно затруднить идентификацию человека по его IP-адресу. Шифрование SSL (https): Чтобы защитить ваши данные, передаваемые через наше онлайн-предложение, мы используем шифрование SSL. Вы обнаруживаете такие зашифрованные соединения по префиксу https:// в адресной строке вашего браузера.',
     // header ÜBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN
     'BERMITTLUNGH1': 'ПЕРЕДАЧА И РАСКРЫТИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ',
     'Rahmen': 'В рамках нашей обработки персональных данных данные могут передаваться другим органам, компаниям, юридически самостоятельным организациям или лицам или раскрываться вам. Получателями этих данных могут быть, например, платежные учреждения в рамках платежных операций, поставщики услуг, порученные ИТ-задачам, или поставщики услуг и контента, подключенных к веб-сайту. В таком случае мы соблюдаем требования законодательства и, в частности, заключаем соответствующие контракты или контракты. Соглашения, предназначенные для защиты ваших данных, заключаются с получателями ваших данных. Передача данных внутри организации: Мы можем передавать персональные данные другим органам в нашей организации или предоставлять вам доступ к этим данным. Если такая передача осуществляется в административных целях, передача данных основана на наших законных деловых и деловых интересах или происходит при условии выполнения наших обязательств, связанных с контрактом, или при наличии согласия заинтересованных сторон или юридического разрешения.',
     // header EINSATZ VON COOKIES
     'EINSATZH1': 'ИСПОЛЬЗОВАНИЕ ФАЙЛОВ COOKIE',
     'EINSATZH1': 'В рамках нашего онлайн-предложения так называемые. Куки развернуты. Это пакеты данных, которые обмениваются между сервером онлайн-предложения и браузером пользователя. Они сохраняются при использовании онлайн-предложения с используемых устройств (ПК, ноутбука, планшета, смартфона и т. Д.). Файлы cookie не могут нанести ущерб используемым устройствам в той степени, в которой они используются. В частности, они не содержат вирусов или других вредоносных программ. Файлы cookie хранят информацию, которая возникает в связи с конкретным используемым устройством. Это ни в коем случае не позволяет нам получить непосредственное представление о личности посетителя веб-сайта. Файлы cookie в основном принимаются в соответствии с основными настройками браузеров. Настройки браузера можно настроить так, чтобы файлы cookie либо не принимались на используемых устройствах, либо чтобы каждое отдельное уведомление было сделано до создания нового файла cookie. Тем не менее, следует отметить, что отключение файлов cookie может привести к тому, что не все функции онлайн-предложения будут использованы наилучшим образом. Использование файлов cookie служит для того, чтобы сделать использование нашего онлайн-предложения более удобным. Например, сеансовые файлы cookie могут быть использованы для определения того, посетил ли посетитель отдельные страницы веб-сайта. После выхода с веб-сайта эти сеансовые файлы cookie автоматически удаляются. Временные файлы cookie используются для улучшения удобства использования. Они хранятся на устройстве посетителя в течение временного периода времени. При повторном посещении веб-страницы автоматически обнаруживается, что посетитель уже посещал страницу в более раннее время и какие входы и настройки были сделаны при этом, чтобы не повторять их. Файлы cookie также используются для анализа просмотров онлайн-предложения в статистических целях и для улучшения предложения. Эти файлы cookie позволяют автоматически распознавать, что посетитель ранее посещал веб-сайт при повторном посещении. Здесь происходит автоматическое удаление файлов cookie по истечении определенного времени. Продолжительность хранения: если мы не предоставим вам явную информацию о продолжительности хранения постоянных файлов cookie (например, в рамках так называемого файла cookie). Отказ от файлов cookie), пожалуйста, предположите, что срок хранения может составлять до двух лет. Общие указания по отзыву и возражению (отказ): В зависимости от того, осуществляется ли обработка на основе согласия или разрешения закона, у вас всегда есть возможность отозвать предоставленное согласие или отказаться от обработки ваших данных с помощью технологий cookie (в совокупности называемых „отказом“). Сначала вы можете объяснить свое несогласие с помощью настроек своего браузера, например, отключив использование файлов cookie (что также может ограничить работоспособность нашего онлайн-предложения). Противоречие с использованием файлов cookie в целях онлайн-маркетинга также может возникнуть с помощью различных услуг, особенно в случае отслеживания, через веб-сайты https://optout.aboutads.info и https://www.youronlinechoices.com / быть объясненным. Кроме того, вы можете получить дополнительные возражения в соответствии с информацией о поставщиках услуг и файлах cookie, которые вы используете. Обработка данных cookie на основе согласия: Мы используем процедуру управления согласием cookie, в рамках которой подтверждается согласие пользователей на использование файлов cookie или файлов cookie. обработки и поставщики, упомянутые в рамках процедуры управления согласием файлов cookie, могут быть получены, а также управляться и отменены пользователями. При этом заявление о согласии сохраняется, чтобы не повторять его запрос снова для необходимости и не иметь возможности доказать согласие в соответствии с юридическими обязательствами. Хранение может осуществляться на стороне сервера и/или в файле cookie (так называемом файле cookie, или с использованием сопоставимых технологий), чтобы иметь возможность сопоставить согласие с пользователем или его устройством. При условии индивидуальной информации о поставщиках услуг по управлению файлами cookie применяются следующие указания: Срок хранения согласия может составлять до двух лет. При этом формируется псевдонимный идентификатор пользователя и сохраняется с указанием даты согласия, информации о охвате согласия (например, какие категории файлов cookie и/или поставщиков услуг), а также браузера, системы и используемого устройства. • Типы обрабатываемых данных: данные об использовании (например, посещенные веб-сайты, интерес к контенту, время доступа), мета-/коммуникационные данные (например, информация об устройстве, IP-адреса). • Заинтересованные лица: пользователи (например, посетители веб-сайта, пользователи онлайн-сервисов). • Правовые основы: Согласие (ст. 6 абс. 1 ст. 1 лит. a. GDPR), Законные интересы (ст. 6 абс. 1 ст. 1 лит. f.GDPR).',
     // header EINGESETZTE DIENSTE UND DIENSTEANBIETER
     'EINGESETZTEH1': 'ИСПОЛЬЗУЕМЫЕ УСЛУГИ И ПОСТАВЩИКИ УСЛУГ',
     'Borlabs': 'Cookie Borlabs: В нашем онлайн-предложении используется cookie Borlabs, который устанавливает технически необходимый файл cookie для хранения согласия пользователя на cookie. Borlabs файлы cookie, обрабатываем персональные данные. В файле cookie Borlabs хранятся согласия, предоставленные пользователем при входе на веб-сайт. Если пользователь хочет отозвать это согласие, он может удалить файл cookie в своем браузере. При повторном входе/перезагрузке веб-сайта пользователю снова будет предложено получить согласие на получение файлов cookie.',
     // page Impressum
     // header IMPRESSUM + Diensteanbieter
     'IMPRESSUMH1': 'Персональные данные',
     'GmbH': 'ООО DeinSteinDesign',
     'Steinberg': `Улица Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header Kontaktmöglichkeiten
     'KontaktmgH1': `Возможности контакта`,
     'perm²': 'E-Mail: hello@deinsteindesign.de Контактная форма: https://deinsteindesign.de',
     // header Vertretungberechtigte
     'VertretungberechtigteH1': `Уполномоченные по представлению`,
     'Vertretungs': 'Исполнительные директора, уполномоченные представительством: Tina Oehler и Linda Winnie Grumbt ворчат Суд по реестру: Amtsgericht Dresden Регистрационный номер: HRB 40323 Идентификационный номер налога с продаж: DE335975861',
     // header Inhaltlich Verantwortliche (o.S.d. § 18 Abs. 2 MStV.):
     'InhaltlichH1': `Ответственные за содержание (o.S.d. § 18 Abs. 2 MStV.):`,
     'Tina': 'Tina Oehler Улица Steinberg 3 D-01326 Dresden',
     // header Hinweis Nach § 36 VSBG
     'HinweisH1': `Примечание после § 36 VSBG`,
     'Die': `Вы можете найти платформу для онлайн-разрешения споров Еврокомиссии по адресу http://ec.europa.eu/consumers/odr Мы не обязаны и в принципе не готовы участвовать в процедуре разрешения споров в арбитражном центре для потребителей.`,
     // header Design, Umsetzung
     'DesignH1': `Дизайн, реализация`,
     'DesignH1': `Puls13 – стратегия и создания ООО`,
     // header Marketingberatung
     'MarketingH1': `Маркетинговые консультации`,
     'Anne': `Anne-Kathrin Liebthal https://www.comigo-marketing.de`,
     // header Fotografie
     'FotografieH1': `Фотографии`,
     'https': `https://get-shot.de`,
     // page Checkout
     // podmenu
     'home': 'Главная',
     'Checkout': `Оплата`,
     // header Billing info
     'BillingH1': 'Информация об оплате',
     'Pleaseр2': 'Пожалуйста, введите свои платежные данные',
     'Step': 'Шаг 1 из 5',
     // data entry
     'First': 'Имя',
     'Last': 'Фамилия',
     'Email': `Email`,
     'Phone': 'Номер телефона',
     'Address': `Адрес`,
     'Town': 'Город',
     'Country': `Страна`,
     'Postal': 'Почтовый индекс',
     'Ship': 'Отправить по другому адресу?',
     // header Billing method
     'BillH1': 'Вариант доставки',
     'Pleaseр2': 'Пожалуйста, выберите доставку',
     'Step': 'Шаг 2 из 5',
     // header Payment method
     'PaymentH1': 'Способ оплаты',
     'Pleaseр2': 'Пожалуйста, введите свой способ оплаты',
     'Step': 'Шаг 3 из 5',
     'Credit': 'Кредитная карта',
     'Card': 'Номер карты',
     'holder': 'Владелец карты',
     'Expiration': 'Срок годности',
     'PayPal': 'PayPal',
     'GooglePay ': 'GooglePay ',
     // header Additional informations
     'Additional': 'Дополнительная информация',
     'Need': 'Нужно что-то еще? Мы сделаем это для вас!',
     'Step': 'Шаг 4 из 5',
     'Order': 'Примечания к заказу',
     'Need': 'Вам нужен конкретный день доставки? Посылаете подарок? Напишите нам...',
     // header Confirmation
     'ConfirmationH1': 'Подтверждение',
     'Weare': 'Мы подходим к концу. Всего несколько кликов и ваш заказ готов!',
     'Step': 'Шаг 5 из 5',
     'Agree': 'Я согласен с отправкой маркетинговых и информационных писем. Никакого спама.',
     'With': 'Я согласен с условиями, положениями и политикой конфиденциальности.',
     'Completebutt': 'Завершить заказ',
     // header All your data are safe
     'Allyour': `Все ваши данные в безопасности`,
     'Weare': `Мы используем самые современные средства безопасности, чтобы предоставить вам наилучшие впечатления.`,
    }
  } 
})
export default i18n