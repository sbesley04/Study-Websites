// POLS 325 East European Politics — Final Exam Study Data
// Coverage: Module 10 (Transitions) through Module 19.2 (Russia-Ukraine War)

const STUDY_DATA = {
  exam: {
    when: "Monday, May 4, 11:30am–2:00pm, regular classroom",
    format: "Closed book",
    structure: [
      "20 multiple-choice or fill-in-the-blank questions (1 pt each)",
      "6 short answer (9 to choose from, 2 pts each — describe a concept or table/graph in 1–2 sentences)",
      "3 paragraph questions (4 to choose from, 10 pts each)"
    ],
    coverage: "Module 10 'Transitions' through Module 19.2 'Russia-Ukraine war'"
  },

  modules: [
    {
      id: "m10",
      num: "10",
      title: "Transitions",
      readings: ["Kuran — Now Out of Never", "Way — Real Causes of the Color Revolutions"],
      overview: "Examines the 1989 'first wave' of post-communist transitions and the early-2000s 'color revolutions.' Argues that transition pathways depended on the type of antecedent communist regime, and that delayed authoritarian breakdowns were driven by structural factors (Western linkage, ruling-party cohesion, coercive capacity, state economic control) — not opposition strategy or diffusion alone.",
      keyConcepts: [
        {term: "Three antecedent regime types (Kitschelt-style)", def: "(1) National-consensus communism (Poland, Hungary) → negotiated transitions; (2) Bureaucratic-authoritarian (Czechoslovakia, East Germany) → collapse; (3) Patrimonial (Romania, Bulgaria, Serbia, Albania) → 'smokescreen' transitions producing 1990s hybrid regimes and a later 2nd wave."},
        {term: "Kuran's pace metaphor", def: "Poland—10 years, Hungary—10 months, East Germany—10 weeks, Czechoslovakia—10 days, Romania—10 hours."},
        {term: "Transitions Paradigm (Carothers critique)", def: "Stages of opening → breakthrough → consolidation. Critiqued as teleological ('democratization as growing up') and for assuming a predictable sequence."},
        {term: "Consolidated democracy (Przeworski)", def: "When democracy becomes 'the only game in town' — losers want to try again under the same rules, not subvert them."},
        {term: "Color revolutions", def: "Second-wave transitions (Serbia 2000, Georgia 2003, Ukraine 2004, Kyrgyzstan 2005) triggered by disputed elections; driven by structural weakness of the regime, not by diffusion of opposition tactics."},
        {term: "Way's four structural factors", def: "(1) Strength of ties to the West (linkage & leverage); (2) Ruling-party cohesion (institutionalized vs. patronage machine); (3) Coercive capacity (battle-tested security forces vs. demoralized/underfunded ones); (4) State control over economy (non-privatization or mineral rents starve opposition financing)."}
      ],
      shortAnswerSeeds: [
        "Why was the 1989 transition surprising in retrospect even though afterwards it looked inevitable? (Kuran's preference falsification + revolutionary thresholds)",
        "Distinguish negotiated, collapse, and smokescreen transitions with one example each",
        "Two critiques of the transitions paradigm",
        "Way's four structural factors that determine whether a postcommunist autocrat survives"
      ],
      paragraphSeeds: [
        "Compare and contrast why Poland and Romania ended up with such different transition pathways. Reference antecedent regime type, presence/absence of organized opposition, role of negotiation vs. collapse, and consequences for the 1990s.",
        "Why did 'color revolutions' succeed in Serbia, Georgia, Ukraine and Kyrgyzstan but fail in Belarus, Russia, Armenia, and Azerbaijan? Use Way's framework — Western linkage + party/state/coercive capacity."
      ]
    },
    {
      id: "m11",
      num: "11",
      title: "Creating New Political Institutions",
      readings: ["Lijphart — Constitutional Design for Divided Societies", "Bernhard — Institutional Choice after Communism"],
      overview: "How postcommunist states chose constitutions, electoral systems, and executive structures — and why the choices were shaped by uncertainty, contingency, and the self-interest of the rule-writers.",
      keyConcepts: [
        {term: "Institution (definition)", def: "Rules, organizations, laws, or practices that inform or delimit actions; distinct from 'culture' (norms, beliefs, narratives)."},
        {term: "Adversarial vs. consensual democracy (Lijphart)", def: "Adversarial (UK): single-party majoritarian, SMD, two-party, unitary, parliamentary sovereignty. Consensual (Switzerland): power-sharing coalitions, PR, multiparty, federal, judicial review."},
        {term: "Electoral system dimensions", def: "Electoral formula, district magnitude, threshold, ballot structure, number of votes per voter."},
        {term: "Majoritarian (SMD)", def: "First-past-the-post (US/UK), alt vote (AUS), two-round (FR). Disproportional, favors large parties, tends toward two-party systems."},
        {term: "Proportional Representation (PR)", def: "Closed-list (Spain), open-list (Austria), STV (Ireland). Seats ≈ vote share; coalition/minority govts; multiparty systems."},
        {term: "Mixed systems", def: "MMP/compensatory (Germany), Parallel/MMM (Russia pre-2005, post-2016). Combine SMD local representation with PR proportionality."},
        {term: "Parliamentary, Presidential, Semi-Presidential", def: "Parliamentary (UK, DE, CZ, BG): voters elect parliament only, govt needs parliament's confidence. Presidential (US, Latin America): fixed terms, separation of powers. Semi-Presidential (FR, PL, RO, UA, LT): voters elect both."},
        {term: "Risk-aversion under uncertainty", def: "Politicians who don't know how their party will do tend to choose less-risky electoral systems (PR with low threshold) — see Poland 1991: 29 parties won seats."},
        {term: "Hungary 1990 contingency", def: "Imre Pozsgay was the most popular politician; rivals forced a referendum on whether president should be popularly elected → voters chose parliamentary system to block him → Hungary became parliamentary."}
      ],
      shortAnswerSeeds: [
        "What's the key tradeoff between PR and SMD electoral systems?",
        "Define semi-presidential system, give two East European examples",
        "Why did Poland's first parliament have 29 parties? (uncertainty argument)",
        "How did contingency shape Hungary's choice of executive type?"
      ],
      paragraphSeeds: [
        "Why did postcommunist constitution-makers tend to favor proportional representation and parliamentary systems? Discuss the role of uncertainty, the self-interest of incumbents, the dangers of presidentialism in fragmented societies, and Hungarian/Polish examples.",
        "Compare Lijphart's adversarial and consensual models. Which is better suited to societies with deep ethnic, religious or regional cleavages, and why?"
      ]
    },
    {
      id: "m12",
      num: "12",
      title: "Economic Transformation: From Plan to Market",
      readings: ["Fisher & Gould — Economic Conditions and Trends (CPS Ch. 3)", "Milanovic — Income, Inequality, and Poverty During Transition (Ch. 2-3)"],
      overview: "The 1990s economic transformation was a quadruple challenge: macroeconomic stabilization, microeconomic liberalization (privatization), institutional/structural reform, and European integration. Three distinct paths produced three distinct outcomes.",
      keyConcepts: [
        {term: "Legacies of socialism", def: "Environment: pollution, exhausted resources. Labor: overemployment, but high education + low wages. Capital: poor infrastructure, too much heavy industry. Institutions: no banks, contract law, accountancy. Finances: distorted prices, 'monetary overhang' (savings in mattresses), no income-tax tradition."},
        {term: "Four reform tasks", def: "(1) Macroeconomic stabilization (free prices, control inflation); (2) Microeconomic liberalization (privatization); (3) Institutional/structural reform; (4) European integration."},
        {term: "Privatization methods", def: "(a) Auction to highest bidder — risk of insider grabs; (b) Voucher to all citizens — many cashed out instantly; (c) Restitution to former owners or heirs."},
        {term: "Three reform paths and outcomes", def: "(1) SHOCK THERAPY: Czech Rep, Hungary, Poland → rapid recovery. (2) GRADUALISM: Romania, Bulgaria → delayed recovery. (3) POLITICAL/CRONY CAPITALISM: Ukraine, Belarus → stagnation. Russia is a special case (resource-based)."},
        {term: "Milanovic's comparison", def: "1990s downturn in Russia/E. Europe was comparable to (and in Russia's case worse than) the Great Depression in the US and Germany."},
        {term: "Winners", def: "Former communist managers who converted political to economic capital; 'second economy' entrepreneurs; new business owners; younger/better-educated/adaptable workers."},
        {term: "Losers", def: "Old-age pensioners and others on fixed incomes; people with obsolete skills; employees of shrinking state sector (teachers, state-firm workers, defense contractors)."},
        {term: "GDP per capita pattern", def: "Today, the old East/West gap has narrowed; the bigger differentiation is now subnational (cities vs. countryside), EU-member vs. non-member, and a north-south axis (poor southern Mediterranean ≈ poor E. European regions)."}
      ],
      shortAnswerSeeds: [
        "Compare shock therapy and gradualism with country examples",
        "What is 'political capitalism' and why did it produce stagnation?",
        "Identify the main 'winners' and 'losers' of the 1990s transition",
        "Describe the GDP-per-capita graph showing rapid-recovery vs. gradualist vs. political-capitalism cases"
      ],
      paragraphSeeds: [
        "Why did some postcommunist economies (CZ, HU, PL) recover quickly while others (Ukraine, Belarus) stagnated? Discuss the four reform tasks, the choice of privatization method, and the role of state-business relations in shaping outcomes.",
        "What were the social consequences of the economic transition? Discuss inequality, the winners-and-losers cleavage, and how this shaped subsequent politics (e.g., support for ex-communists, populism)."
      ]
    },
    {
      id: "m13",
      num: "13",
      title: "Political Elites — Old and New",
      readings: ["Ágh — From Nomenklatura to Clientura", "Scheppele — Foreword to Magyar's Post-Communist Mafia State"],
      overview: "The post-1989 elite was heterogeneous and 'transitional.' Ágh argues the nomenklatura system was replaced not by a Western-style professional elite but by a 'clientura' — a clientelistic political class that turned politics into a business. Scheppele extends this to the 'mafia state.'",
      keyConcepts: [
        {term: "Nomenklatura system", def: "Pre-1989 system in which all major appointments, promotions, and dismissals were decided by the Communist Party — managerial occupations were reserved for party members."},
        {term: "Petty vs. grand corruption (Kornai)", def: "Under socialism: petty corruption pervasive (gifts for permits, surgery), but grand corruption rare — state ownership + travel restrictions made stolen millions unusable."},
        {term: "Ágh's elite typology by background", def: "(1) Former nomenklatura; (2) former satellite-org officials; (3) former dissidents/intellectuals; (4) technocratic experts; (5) social-movement leaders; (6) emerging business class."},
        {term: "Ágh's elite typology by motivation", def: "(1) Politicians of morals (Havel: 'live in truth'); (2) Politicians of historical vision (national rebirth, 1920s/30s nostalgia); (3) Politicians by chance (low entry barriers); (4) Politicians by profession (old nomenklatura + new professionals)."},
        {term: "Clientura", def: "Ágh's term: politics organized as clientelistic patron-client networks rather than a Weberian rational bureaucracy or Western professional elite. A 'magical transformation' from nomenklatura to clientura."},
        {term: "Party conceptualizations", def: "(1) Business venture (entrepreneurship for office and benefits — clientura model); (2) Cooperative association (group interests, policy goods); (3) Public utility (constitutional design, state-society intermediation)."},
        {term: "Ideological families in E. Europe", def: "Liberalism (privatization, individual freedom — but lacked propertied middle class); Conservatism (national restoration, étatism, religion); Ex-Communism (hardline Marxism-Leninism / nationalism / reform-communist social democracy); Populism (anti-elitism); New Left (post-materialist — still embryonic)."},
        {term: "Definitions of corruption", def: "'Misuse of public office for private gain.' Sub-types: kleptocracy ('rule of thieves'), state capture (private actors systematically shape state institutions/policies), mafia state (state run on organized-crime principles)."}
      ],
      shortAnswerSeeds: [
        "Define 'nomenklatura' and explain why grand corruption was rare under it",
        "What does Ágh mean by 'clientura'?",
        "Distinguish kleptocracy, state capture, and mafia state",
        "Why did petty corruption become grand corruption after 1991 in some countries but not others?"
      ],
      paragraphSeeds: [
        "What does Ágh mean by the 'transition from nomenklatura to clientura,' and how does this concept help us understand post-communist political development? Use his typology of elites by motivation.",
        "How does post-communist corruption differ across the region? Discuss the 'EU-anchored' anti-corruption track (Poland, Baltics), the smokescreen path (Bulgaria, Romania), and the 'hydrocarbon-rich' kleptocratic path (Russia, Kazakhstan)."
      ]
    },
    {
      id: "m14",
      num: "14",
      title: "Elections and Voting",
      readings: ["Deegan-Krause — Civil Society and Political Parties (CPS Ch. 5)", "Snegovaya — When Left Moves Right, Introduction"],
      overview: "Why the 'standard model' of voting (party ID, social cleavages, retrospective economic voting) doesn't fit Eastern Europe well: weak partisan attachments, high party-system fluidity, less developed cleavages, weak civil society, rising populism, and electoral malpractice.",
      keyConcepts: [
        {term: "Michigan model", def: "Long-term factors: social structure, party ID, intergenerational transmission. Short-term: issues, economic conditions, campaign effects."},
        {term: "Two-axis political space", def: "Economic Left↔Right × Cultural Left↔Right. Some quadrants empty in many countries (e.g., almost no economic-right/cultural-left voters in 2016 US)."},
        {term: "Party system features", def: "(1) Number/relative strength of parties (ENP); (2) ideological positions/polarization; (3) coalition habits; (4) voter alignments; (5) stability vs. volatility."},
        {term: "Effective Number of Parties (ENP)", def: "A measure that counts parties weighted by size — captures how many really matter."},
        {term: "Three explanations for party-system origins", def: "(1) Historical (e.g., WWI franchise expansion → mass parties); (2) Institutional (Duverger's Law: SMD → 2-party, PR → multiparty); (3) Sociological (cleavages from nation-building, secularization)."},
        {term: "Bottom-up vs. top-down volatility", def: "Bottom-up: voters switch parties between elections. Top-down: parties appear, disappear, split, or merge — voters can't be loyal to a party that no longer exists."},
        {term: "Five problems applying the standard model in E. Europe", def: "(1) Weak party attachments; (2) High party-system fluidity (volatility, low turnouts); (3) Less developed cleavages; (4) Less developed civil society; (5) Rise of populism; (6) Electoral malpractice."},
        {term: "Left vs. right populism", def: "Left populism: virtuous people vs. corrupt economic elites who broke the system. Right populism: authentic native people vs. cosmopolitan elites and immigrants."},
        {term: "Civil society (CPS definition)", def: "Generic term for collective bodies — interest groups, service orgs, clubs, think tanks, foundations, churches — that emphasize voluntary, independent effort oriented toward public goals."}
      ],
      shortAnswerSeeds: [
        "Define ENP and explain what a high ENP means for governance",
        "Distinguish bottom-up and top-down party system volatility",
        "Why is voting in E. Europe harder to explain with the Michigan model?",
        "Describe the chart showing turnout dropping after the ~99% communist-era turnouts"
      ],
      paragraphSeeds: [
        "Why is party-system volatility so much higher in Eastern Europe than in Western democracies? Discuss the absence of long-standing partisan attachments, the fluidity of parties themselves, and the legacy of weak civil society.",
        "Compare left and right populism. Why has right populism become especially salient in Eastern Europe in the past decade?"
      ]
    },
    {
      id: "m15",
      num: "15",
      title: "Nationalism",
      readings: ["CPS Ch. 4 (Csergo & Wittenberg)", "Gagnon — The Myth of Ethnic War, Ch. 1"],
      overview: "Nations are groups of people who share cultural traits AND claim self-government over a specific territory. Nationalism is the pursuit of a set of rights for the self-defined nation, including territorial autonomy. The Yugoslav wars are the central case: Gagnon argues they were NOT caused by ancient ethnic hatreds but by elites strategically using violence to demobilize political pluralism.",
      keyConcepts: [
        {term: "Nation (Barrington / CPS)", def: "A collective united by shared cultural features AND the belief in the right to territorial self-determination. Distinct from ethnic groups (which don't necessarily claim self-government on a particular territory)."},
        {term: "Nationalism (Barrington)", def: "Pursuit of a set of rights for the self-defined nation — at minimum territorial autonomy or sovereignty. Defines (1) territorial boundaries the nation has a right to control and (2) membership boundaries of the nation."},
        {term: "Civic vs. Ethnic nationalism (Kohn 1944)", def: "Civic ('Western'): membership = shared political principles; state precedes nation; rational, voluntary; strong bourgeoisie. Ethnic ('Eastern'): membership = shared language/culture/descent; nation precedes state; emotional, ascriptive; weak bourgeoisie."},
        {term: "Critiques of Kohn's dichotomy", def: "(1) Western 'civic' nations also built through coercive cultural homogenization; (2) most people don't choose national identity; (3) 'orientalizing' — projects civilized West vs. backward East."},
        {term: "Three multinational federations dissolved", def: "Czechoslovakia (Velvet Divorce — peaceful, no territorial claims); Soviet Union (peaceful but Russian diasporas left in successor states); Yugoslavia (fragmentation + ethnic enclaves → war and genocide)."},
        {term: "Yugoslav background conditions", def: "Ethnically diverse (esp. Bosnia); Serbian resentment of Tito's anti-nationalist 'Brotherhood and Unity'; north (rich Slovenia/Croatia) vs. center/south (poor) inequality; held together by Tito's charisma."},
        {term: "Yugoslav timeline", def: "1980 Tito dies → 1986 Milošević → 1989 Kosovo speech → 1990 Serb militants armed → 1991 Croatia/Slovenia independence → 1992 war spreads to Bosnia, ethnic cleansing → 1995 NATO intervenes, Dayton Accords → 1999 Kosovo war + NATO airstrikes → 2000 Bulldozer Revolution → 2001 Milošević to The Hague."},
        {term: "Gagnon's thesis (strategic elites)", def: "Violence in former Yugoslavia was a STRATEGIC POLICY chosen by elites confronted with political pluralism and popular mobilization. Violence is used to impose POLITICAL HOMOGENEITY on heterogeneous social spaces — to demobilize challenges to elite interests, NOT because of ancient hatreds."},
        {term: "Subversive institutions (Bunce)", def: "Tito's federal structure was meant to foster 'brotherhood and unity' but instead shifted power to republics, giving local elites the resources to make a bid for statehood. 'Control of government is, of course, a pork good — perhaps the biggest of all' (Fearon)."},
        {term: "Role of outside powers", def: "Major powers (US, Russia, Germany, UK, EU) had conflicting interests: keep Serbia as regional hegemon, avoid setting a precedent for breakup, reluctance to intervene militarily after Cold War cuts, plays for regional influence."},
        {term: "Gagnon's evidence against 'ethnic hatred' narrative", def: "(1) Massive draft-dodging by Serbian young men — 85-90% in Belgrade; (2) Serb refugees treated badly by 'co-ethnic' city dwellers; (3) Violence continued AGAINST MODERATE SERBS even after non-Serbs were cleansed — proving the target was political pluralism, not ethnic others."}
      ],
      shortAnswerSeeds: [
        "Define 'nation' and 'nationalism' (Barrington)",
        "What's the difference between civic and ethnic nationalism, and what's the standard critique of Kohn's distinction?",
        "Explain Gagnon's claim that the Yugoslav wars were NOT caused by ethnic hatred — give two pieces of evidence",
        "How did Tito's federal structure end up subverting 'brotherhood and unity'?",
        "Identify the role of outside powers in prolonging the Yugoslav wars"
      ],
      paragraphSeeds: [
        "Critically evaluate Gagnon's argument that the Yugoslav wars were caused by elite strategy rather than 'ancient ethnic hatred.' What evidence does he marshal? How well does the argument explain the targeting of moderate Serbs by the Krajina leadership?",
        "Compare the breakups of Czechoslovakia, the Soviet Union, and Yugoslavia. Why did the first two end peacefully while the third descended into genocidal war?",
        "How would you reconcile the tension between national self-determination and liberal democracy in deeply divided post-Yugoslav states like Bosnia?"
      ]
    },
    {
      id: "m16",
      num: "16",
      title: "Settling Accounts with the Past (Transitional Justice)",
      readings: ["CPS Ch. 7"],
      overview: "How post-authoritarian societies deal with the legacy of the old regime — the tension between justice and the rule of law (non-retroactivity, due process). Models range from punishment to amnesia along a retribution↔reconciliation axis.",
      keyConcepts: [
        {term: "Positive law vs. natural law", def: "Positivist: law is whatever the sovereign says it is. Natural-law tradition: there are immutable moral principles independent of human-made laws. Tension: when must we defy unjust law? When can we be held responsible for following it (Nuremberg)?"},
        {term: "Transitional justice (Teitel)", def: "A distinctive conception of justice associated with periods of radical political change after past oppressive rule — an exercise in law and politics."},
        {term: "Five models on the retribution↔reconciliation axis", def: "(1) Punishment (Rwanda — widespread criminal trials); (2) Selective punishment (Germany, Greece — selective prosecutions, lustration); (3) Historical clarification (Chile, S. Africa — truth commissions); (4) Amnesia (Spain — no public reckoning); (5) Spontaneous retribution (mob/individual revenge — states try to curtail)."},
        {term: "'Amnesia' model rationale", def: "Either old officials are too strong to confront ('peace vs. justice' dilemma) or their professional skills (judges, managers) cannot be replaced overnight."},
        {term: "Historical clarification model", def: "Establish 'who did what' without criminal prosecutions. Open secret-police archives (privacy concerns), public truth commissions, memorials, publications."},
        {term: "Punishment model and 'Nuremberg defense' problems", def: "(1) Superior orders: if accepted, only top leaders responsible; if rejected, how far down the chain? (2) Defendant acted within the law as it existed: if accepted, narrow range of charges; if rejected, retroactivity risks turning trial into 'retribution not justice.'"},
        {term: "Lustration", def: "Vetting/exclusion of former regime collaborators from public office. Questions: Who's covered? (officials only or informants?) Should motives matter? (forced vs. voluntary collaboration?) Should the position involved matter?"},
        {term: "Lustration debate (FOR)", def: "Object lesson in historical justice; helps society make a clean break; prevents blackmail of compromised officials in public office."},
        {term: "Lustration debate (AGAINST)", def: "Everyone collaborated to some degree; would decimate professions; secret-police files contain errors; smokescreen for patronage purposes; only catches foot soldiers."},
        {term: "History as power (Mantel + closing)", def: "History is not a collection of facts but a method of organizing our ignorance — partial evidence, biased witnesses, incomplete accounts. Who 'chooses' the historical narrative matters; collective memory underpins national identity."}
      ],
      shortAnswerSeeds: [
        "Place Spain, Germany, Czech Rep., and Rwanda on the retribution↔reconciliation axis",
        "What is lustration and what are two key arguments for and against it?",
        "Explain the 'Nuremberg defense' problem in transitional justice",
        "Why might a society choose the 'amnesia' model?"
      ],
      paragraphSeeds: [
        "Compare the punishment, historical clarification, and amnesia models of transitional justice. Discuss the trade-offs each makes between justice, rule of law, and political stability.",
        "Why is lustration controversial as a tool of transitional justice? Discuss both the principled and practical objections, and assess (per Letki 2002) whether lustration has been necessary for successful democratization."
      ]
    },
    {
      id: "m17_1",
      num: "17.1",
      title: "Democratic Backsliding",
      readings: ["Various — on Canvas"],
      overview: "Defining and measuring democratic backsliding. The current wave is puzzling because it's happening in relatively wealthy countries, contrary to Przeworski's old finding that no democracy ever fell with per capita income above 1975 Argentina.",
      keyConcepts: [
        {term: "Democratic backsliding (Lust & Waldner)", def: "Deterioration of qualities associated with democratic governance within any regime — a decline in competitive electoral procedures, civil and political liberties, and accountability."},
        {term: "Thin definition of democracy (Przeworski)", def: "Democracy = a system in which parties lose elections. Sufficient condition: contestation open to participation."},
        {term: "Thick definition of democracy (Tilly)", def: "A regime is democratic to the degree that political relations between state and citizens feature broad, equal, protected, and mutually binding consultation."},
        {term: "Five-tier classification of regimes", def: "(1) Full Autocracy / Closed Authoritarianism — no multiparty elections; (2) Hegemonic / Electoral Authoritarianism — uncontested elections; (3) Competitive Authoritarianism — competitive but not free/fair; (4) Electoral Democracy — free/fair elections but weak rule of law; (5) Liberal Democracy — both."},
        {term: "Continuous vs. discrete measures", def: "V-Dem & Economist Democracy Index use both continuous scales and categorical labels (full democracy, flawed democracy, hybrid, authoritarian)."}
      ],
      shortAnswerSeeds: [
        "Distinguish 'thin' and 'thick' definitions of democracy",
        "Place Russia, Hungary, Poland on the 5-tier hybrid-regime spectrum",
        "What was Przeworski's per-capita-income claim about democratic stability, and why is it puzzling now?"
      ],
      paragraphSeeds: [
        "What is 'democratic backsliding' and how should it be measured? Discuss thin vs. thick definitions and the difficulty of classifying hybrid regimes.",
        "Why is the current wave of democratic backsliding puzzling for political scientists? What did earlier theory predict about wealthy democracies, and why hasn't that prediction held up?"
      ]
    },
    {
      id: "m17_2",
      num: "17.2",
      title: "Backsliding in Hungary",
      readings: ["Anghel & Jones — What Went Wrong in Hungary", "Carothers — Why Viktor Orbán's Fidesz Party Lost"],
      overview: "Hungary's Fidesz under Orbán is the paradigm case of democratic backsliding: state capture through legal manipulation. After 16 years of Fidesz rule (2010-2026), the regime was finally defeated in 2026 by Péter Magyar's Tisza Party.",
      keyConcepts: [
        {term: "Hungarian timeline 1989-2026", def: "1989 negotiated transition from 'goulash communism'; 1990 first elections (MDF/SZDSZ); 1994 left turn (MSZP); 1998 FIDESZ reinvents as right-wing; 2010 economic crisis + FIDESZ sweeps in; 2010-2026 'illiberal democracy'; 2026 TISZA party defeats FIDESZ."},
        {term: "'Frankenstate' (Scheppele 2013)", def: "The aspiring autocrat cherry-picks individually-reasonable institutional/legal components from democratic systems, points to their existence elsewhere ('but in Germany too they ban parties!'). All changes are technically constitutional. The 'monstrous quality' emerges from how the pieces work together."},
        {term: "Five categories of FIDESZ remake", def: "(1) Institutions/rule of law (2011 constitution reduced judicial independence); (2) Media (state media editorial independence dissolved, private outlets taken over); (3) Economy (regulatory pressure on competitors, favored insiders for tenders); (4) Closing civic space (NGO intimidation, attacks on academic freedom); (5) Cultural issues (anti-LGBTQ+, Christian-values focus, control of history)."},
        {term: "Hungarian electoral system manipulation", def: "FIDESZ changed law to: increase SMD share from 46% to 53% (decided by plurality); add 'winner compensation' (winner's votes above runner-up transferred to party list); redistrict to favor FIDESZ rural areas. Strongly disproportional — amplified large parties. In 2026 it backfired: TISZA got the supermajority instead."},
        {term: "FIDESZ's 2026 weaknesses (Carothers)", def: "(1) Terrible economic record (~0.5% growth, 25% inflation peak); (2) Deteriorating public services (especially healthcare; doctors leaving for Austria/Germany); (3) Endemic corruption (tied with Bulgaria as most corrupt EU member; allegations against Orbán's father and son-in-law)."},
        {term: "TISZA's 2026 strengths (Carothers)", def: "(1) Focus on domestic issues — corruption, economy, healthcare — avoiding culture war; (2) Effective campaigning beyond Budapest in small towns/rural areas; (3) Use of social media (Facebook, Instagram) to bypass FIDESZ-dominated traditional media."},
        {term: "Anghel & Jones thesis", def: "'What if Hungary was never a democracy?' Hungarian elites built FORMALLY democratic institutions but Orbán's takeover proceeded in a sequence: (1) capture Fidesz (early 1990s); (2) craft distracting narrative (Christian nationalism); (3) neutralize watchdogs; (4) secure state resources; (5) rewrite rules so the regime can't be dislodged. The 2011 Fundamental Law was the AFTERMATH not the start."},
        {term: "State capture sequence (Auerbach & Kartner)", def: "Politicians who can and will: (1) craft distracting narrative; (2) neutralize watchdogs; (3) secure control over state resources; (4) rewrite rules to make regime undislodgeable."}
      ],
      shortAnswerSeeds: [
        "Define Scheppele's 'Frankenstate' concept",
        "Why was the 2010 election the turning point in Hungarian democratic backsliding?",
        "How did Hungary's electoral system, designed by Fidesz, backfire in 2026?",
        "List Carothers' three Fidesz weaknesses and three Tisza strengths",
        "What is the Anghel & Jones sequence-of-state-capture argument?"
      ],
      paragraphSeeds: [
        "How does Scheppele's 'Frankenstate' concept explain how a democracy can be dismantled without anyone breaking the law? Apply to FIDESZ's actions across the five categories of societal remake.",
        "Why did Fidesz lose the 2026 election after 16 years of dominance? Use Carothers' framework — incumbent missteps + opposition resourcefulness — and discuss the lessons for U.S. politics he draws.",
        "Anghel and Jones argue 'Hungary was never really a democracy.' Evaluate this claim: what does the timing of Orbán's capture of Fidesz suggest about when the slide began, and what does this imply for EU enlargement?"
      ]
    },
    {
      id: "m17_3",
      num: "17.3",
      title: "Explaining Democratic Backsliding",
      readings: ["Various — on Canvas"],
      overview: "Two complementary mechanisms: bottom-up (mass-public preference change toward 'authoritarian welfare chauvinism') and top-down (elite calculations that they will do better under a different system). The 'end of the end of history' and rise of multipolarity have created opportunities for elite-driven backsliding.",
      keyConcepts: [
        {term: "Bottom-up mechanism", def: "Mass publics shift toward 'authoritarian welfare chauvinism' — a system that 'takes care of its own' as long as they 'know their place.' Driven in West by economic threat (deindustrialization, stagnant wages) AND cultural backlash (immigration, multiculturalism, eroded racial hierarchies)."},
        {term: "Why bottom-up is different in E. Europe", def: "(1) E. Europe largely BENEFITED from globalization (factories relocated FROM West TO East); (2) Hasn't experienced large-scale immigration. Instead: breaking of 'social contract' (lifetime employment); end of cultural isolation (delayed gender-norm shifts); 'imitational modernization' (wounded national pride); discomfort with pluralism."},
        {term: "Top-down (elite) mechanism", def: "Democracy is self-enforcing only as long as elites believe they're better off under it. Elites abandon democracy when it threatens their interests OR when they see greater opportunities elsewhere."},
        {term: "'End of the end of history'", def: "In early 1990s (Fukuyama), liberal democracy + social-market economics had no convincing alternative. After two decades, new ideological projects — 'illiberal democracy' — emerged."},
        {term: "Multipolarity", def: "1990s 'unipolar moment' meant alignment with the West was the only path to development. Rising authoritarian regimes (China, world's 2nd-largest economy) gave leaders like Orbán a path to decoupling. Authoritarians can act as 'spoilers' in exchange for aid/trade/diplomatic cover."},
        {term: "Krastev quote on Orbán", def: "'What Orbán was selling China was his veto in the European Union ... a regime built on both EU funding and on anti-European rhetoric, all the while attracting non-European allies on the basis that Hungary was the one member state willing to veto EU measures Beijing or Moscow found inconvenient.'"}
      ],
      shortAnswerSeeds: [
        "Distinguish bottom-up and top-down mechanisms of backsliding",
        "Why is the bottom-up explanation for backsliding harder to apply in E. Europe than in the West?",
        "What does the 'end of the end of history' phrase mean?",
        "How does multipolarity create incentives for elite-driven backsliding?"
      ],
      paragraphSeeds: [
        "Compare bottom-up and top-down explanations of democratic backsliding. Which is more useful for understanding the Hungarian case, and why?",
        "How have changes in the international system since the 1990s created new opportunities for would-be authoritarians? Discuss the 'end of the end of history,' the rise of China, and Orbán's role as an EU 'spoiler.'"
      ]
    },
    {
      id: "m18",
      num: "18",
      title: "European Integration",
      readings: ["CPS Ch. 9", "OPTIONAL: Kelemen & Pech — Why Autocrats Love Constitutional Identity"],
      overview: "The EU emerged as a response to 20th-century European disasters — meant to constrain capitalism and democracy that could 'go wrong.' E. European enlargement (2004/2007/2013) was driven by 'democratic conditionality' but the EU has struggled to discipline backsliders post-accession.",
      keyConcepts: [
        {term: "Three motivations for integration", def: "(1) IDEALISTIC: end recurring wars, build 'ever-closer union,' redefine identity post-WWII, federation, supra-national welfare state. (2) COLD WAR / SECURITY: post-WWII reconstruction, stabilize fragile democracies, voice in bipolar world. (3) ECONOMIC: efficiency from common market, regional/sectoral support, global competitiveness."},
        {term: "EU as a hybrid", def: "More than a trade pact (NAFTA) or international org (UN), less than a federation. Has legislative (Parliament), executive (Council + Commission), judicial (CJEU) branches. Mixes supranational (EU-only officials) with intergovernmental (member-state officials) institutions."},
        {term: "EU budget", def: "Revenues: GNI-based (1.27% of GNI), VAT share, traditional own resources (import duties). Spending: agricultural subsidies (39%), infrastructure (34%)."},
        {term: "Net contributors vs. net beneficiaries", def: "Some countries pay more than they receive (wealthier, smaller agricultural sectors); others receive more than they pay (poorer, larger agricultural / infrastructural needs)."},
        {term: "Copenhagen Criteria (1993)", def: "Membership requires: (1) stable institutions guaranteeing democracy, rule of law, human rights, minority protection; (2) functioning market economy able to cope with EU competitive pressure; (3) ability to take on obligations of membership including political/economic/monetary union."},
        {term: "Acquis Communautaire", def: "35-chapter body of EU laws, regulations, rulings, standards — the 'instruction manual' for running a modern democracy."},
        {term: "Appeal of EU membership in E. Europe", def: "Symbolic 'return to Europe'; tangible benefits (subsidies, jobs, aid); democratic blueprint; for elites — bogeyman to blame ('we'd raise spending but the EU won't let us')."},
        {term: "Expected consequences of enlargement", def: "Cheap E. labor reinvigorates W. economies (but: free movement → backlash); new markets for W. exporters; outsourcing to 'Chinas next door'; force EU internal reform; strengthen position vs. resurgent Russia."},
        {term: "Democratic conditionality and backsliding paradox", def: "EU membership pushed candidates to democratize (good for democracy), but some predicted post-accession backsliding once conditionality was gone (Roberts 2018). Theoretical until ~2010; very real since."},
        {term: "Article 7 TEU (sanctioning mechanism)", def: "Allows EU to determine clear risk of serious breach of Article 2 values (democracy, rule of law, etc.). Multi-stage: 4/5 majority of Council for warning; UNANIMOUS European Council to find serious breach; QMV to suspend rights including voting. NO mechanism to expel a member."},
        {term: "Why EU hasn't done more about backsliding", def: "(1) Complexity & inertia of EU decision-making; (2) other member states reluctant to set precedents that might come back to haunt them; (3) partisan protection (Fidesz was in EPP — gave EPP a plurality, so EPP shielded it); (4) economic interests (Hungary as 'auto-cracy' — full of W. car factories)."}
      ],
      shortAnswerSeeds: [
        "Explain the three motivations for European integration (idealistic, security, economic)",
        "What are the Copenhagen Criteria?",
        "What is the Acquis Communautaire?",
        "How does Article 7 TEU work, and why has it largely failed against Hungary?",
        "Define 'democratic conditionality' and the paradox of post-accession backsliding"
      ],
      paragraphSeeds: [
        "What motivated European integration after WWII, and how did those motivations shape the eventual structure of the EU? Discuss idealistic, security, and economic motivations and how they map onto today's EU institutions.",
        "Why has the EU struggled to discipline democratic backsliding among its member states? Discuss Article 7's mechanism, partisan dynamics in the European Parliament, and economic considerations.",
        "Did EU enlargement to E. Europe succeed or fail as a democracy-promotion strategy? Discuss the success of conditionality before accession, and the limited tools available afterwards."
      ]
    },
    {
      id: "m19_1",
      num: "19.1",
      title: "European Security",
      readings: ["CPS Ch. 10", "Plokhy — David vs. Goliath", "Bond — European Security in a Time of War"],
      overview: "NATO's purpose has evolved from Cold War deterrence to managing post-Cold War instability. Russia's turn from 'virtual democracy' to revisionism after the 2004 Orange Revolution and 2011-12 protests has made it a 'revisionist power' that seeks to weaken adversaries through corruption, information warfare, soft power, and military force.",
      keyConcepts: [
        {term: "NATO 1949 founding purpose", def: "'Keep the Americans in, the Russians out, and the Germans down.' Also: subtly restrain France/UK from dragging Europe into postcolonial wars."},
        {term: "Article 5", def: "An armed attack on one member in Europe or North America = attack on all; each member 'will assist by taking such action as it deems necessary, including the use of armed force.' BUT vague on required response."},
        {term: "Article 6", def: "Defense applies only to attacks in Europe or North America (originally also 'Algerian departments of France' — deleted after Algerian independence 1962)."},
        {term: "2% GDP defense target", def: "Adopted 2014 after Russia's Crimea annexation. Few NATO members actually meet it; US has continued to bear most of the burden."},
        {term: "Warsaw Pact (1955-1991)", def: "Soviet bloc alliance. Unlike NATO (collective security against external threats), it was used for armed interventions WITHIN the bloc — 'the only alliance for invading its own members' (1968 Czechoslovakia)."},
        {term: "Why E. Europe wanted NATO", def: "(1) Yugoslav civil war showed conflict could spread; (2) EU was not a security alliance; (3) Historical memories of great-power deals over their heads (Munich, Ribbentrop-Molotov); (4) Fear of resurgent Russia; (5) Wanted full membership in Western community."},
        {term: "Western hesitancy on enlargement (1990s)", def: "(1) Risk of strengthening anti-Western sentiment in democratizing Russia; (2) 'Wandel durch Handel' (change through trade) belief; (3) Unipolar moment — NATO 'in search of a mission,' defense cuts."},
        {term: "Why arguments against enlargement weakened", def: "(1) Russia's democratization failed under Putin; (2) No major downturn in West-Russia relations after early enlargement waves; (3) Russia's trade dependence (~50% of fossil fuels to Europe); (4) Russia's rule-of-law dependence (elites parked wealth in West — 'credible commitment problem')."},
        {term: "'Virtual democracy'", def: "Putin's first decade — appearance of pluralism via 'political technology' (fake opposition parties, fake elections, fake independent media), but with limited space for real contestation (Nemtsov, Navalny)."},
        {term: "Putin's turn ~2011-2012", def: "After being spooked by 2004 Orange Revolution, 2011 Arab Spring, 2012 Bolotnaya protests: (1) abandoned 'virtual democracy' for full authoritarianism; (2) turned against the West (blamed for color revolutions); (3) saw armed conflicts as popularity boosters."},
        {term: "Russia as 'revisionist power' — four tools", def: "(1) Weaponization of kleptocracy (buying foreign elites in politics/media/NGOs/think tanks); (2) Weaponization of information (bot farms, RT, coordinated inauthentic activity); (3) Weaponization of culture (anti-wokeness, traditional-values bulwark, far-right alignment); (4) Hard power (Georgia, Armenia/Azerbaijan, Transdniestria, Ukraine + Syria, Mali, Burkina Faso)."}
      ],
      shortAnswerSeeds: [
        "Quote Article 5 and explain its key vagueness",
        "What was 'Wandel durch Handel' and why did it lose credibility?",
        "Define 'virtual democracy' and explain when it ended",
        "What are Russia's four tools as a 'revisionist power'?",
        "Explain the 'credible commitment problem' as it applies to Russian elites"
      ],
      paragraphSeeds: [
        "Why did East European countries seek NATO membership after 1989, and why was the West initially hesitant? Discuss historical memories, the failure of the EU as a security actor, and the 'change through trade' debate.",
        "Trace the evolution of Putin's regime from 'virtual democracy' to revisionist authoritarianism. What domestic and international events catalyzed the turn?",
        "How does Russia exercise power as a 'revisionist' state? Discuss the four mechanisms — corruption, information, culture, military — with examples of each."
      ]
    },
    {
      id: "m19_2",
      num: "19.2",
      title: "Russia–Ukraine War",
      readings: ["CPS Ch. 10", "Plokhy — David vs. Goliath", "Bond — European Security in a Time of War"],
      overview: "The Russia-Ukraine war reflects the divergent post-1991 trajectories of the two states: Ukraine became a competitive democracy (incumbents lose elections); Russia did not. Russia's 2022 invasion can be analyzed at three levels (Waltz: man, state, system), and three IR schools propose different responses.",
      keyConcepts: [
        {term: "1991 prelude", def: "Summer: Baltics declare independence. Aug: failed hardliner coup against Gorbachev → power shifts to Yeltsin. Dec: 92% of Ukrainians vote for independence; Kravchuk elected. Dec 25: Gorbachev resigns; USSR dissolved next day."},
        {term: "Budapest Memorandum (1994)", def: "US and Russia provide 'security assurances' to Ukraine in exchange for Ukraine giving up its inherited Soviet nuclear weapons."},
        {term: "Ukrainian elections 1994-2019", def: "1994 Kuchma (pro-Russia, 52.3%) defeats Kravchuk; 2004 Yanukovych vs. Yushchenko → fraud → ORANGE REVOLUTION → Supreme Court invalidates → Yushchenko wins repeat (53%); 2010 Yanukovych returns (50%) over Tymoshenko; 2019 Zelensky (75%) — east-west divide largely gone."},
        {term: "Euromaidan (2013-14)", def: "Protests against Yanukovych's refusal to sign EU association agreement. Deadly force in Feb 2014, police defections, Yanukovych flees to Russia and asks for intervention. Russia calls it 'Western-sponsored coup.'"},
        {term: "2014 events", def: "March: Russia occupies Crimea using 'little green men' (soldiers without insignia), annexes it. East Ukraine: war between Russian-backed separatists and Kyiv. Casualties 2014-15: ~4,600 Ukrainian KIA, ~6,500 separatist KIA, ~14,000 civilian deaths, ~50,000 wounded."},
        {term: "Waltz's three levels of analysis", def: "Frame for explaining 2022 invasion: (1) Man (leader); (2) State (domestic politics); (3) International system."},
        {term: "Leader-focused explanations", def: "(1) 'Vanity project' — Putin's 70th birthday + COVID isolation → wish to be 'Vladimir the Great'; (2) Personal beliefs — Russians/Belarusians/Ukrainians as 'one people' under Russian tutelage ('On the Historical Unity'); (3) Misperceptions — KGB officer thought small special operation could regain Ukraine."},
        {term: "Domestic politics explanations", def: "(1) Imperial identity — Russia as 'civilization-state,' refusing Ukrainian nationhood; (2) Authoritarian decision-making — no checks/balances, informational deficits, only handful of advisors involved."},
        {term: "International system explanations", def: "(1) NATO expansion — Realist 'security dilemma'; (2) Imperial decline — Russia like France in Algeria; (3) Reaction to color revolutions — 2011 Arab Spring, 2012 Bolotnaya, 2014 Revolution of Dignity, 2020 Belarus protests viewed as US-backed plot."},
        {term: "Bargaining model of war (Fearon 1995)", def: "War = failure of bargaining. Both sides should rationally prefer settlement (war is costly + unpredictable). Bargaining fails due to: (1) misperceptions of resolve/capabilities; (2) commitment problems (e.g., NATO membership); (3) issue indivisibility (territory bargainable but not identity/regime type)."},
        {term: "Three IR schools — Realist", def: "International system is anarchic; self-interest + force underpin everything. 'The strong do what they can and the weak suffer what they must' (Thucydides). Implication: Russia's actions normal; subjugation of small countries is the price of peace among great powers."},
        {term: "Three IR schools — Pragmatist (Liberal Internationalist)", def: "Russia needs Western tech + finance; West needs Russian energy. Implication: both sides will normalize relations and keep doing business. 'Convergence wager' — spread of liberal economics seeds liberal politics."},
        {term: "Three IR schools — Idealist (Wilsonian / Neo-Idealist)", def: "Build IR on cooperation + shared values. 'For the Neo-Idealists, our values are our interests' (Tallis). Embodied in Helsinki Final Act 1975 (sovereign equality, inviolable frontiers, peaceful settlement, etc.). Implication: condemn bad actors; integrate democracies into security alliances; don't sacrifice them to 'spheres of influence.'"},
        {term: "Helsinki Final Act (1975) principles", def: "(1) Sovereign equality; (2) Refraining from threat/use of force; (3) Inviolability of frontiers; (4) Territorial integrity; (5) Peaceful settlement of disputes; (6) Non-intervention in internal affairs; (7) Respect for human rights; (8) Equal rights and self-determination; (9) Cooperation among states + good-faith fulfillment of obligations."},
        {term: "Where things stand 2026", def: "Trump signaled wanting business deal with Russia (sidelined diplomats, used Kushner + Witkoff); US stopped military/financial/humanitarian aid; Europe picking up the cost; Ukraine fought to a stalemate; China supplies both sides (dual-use to Russia, drone parts to Ukraine); US threats to Greenland/Canada broke transatlantic trust; discussion of activating Article 42.7 TEU mutual-defense clause."},
        {term: "Article 42.7 TEU", def: "'If a Member State is the victim of armed aggression on its territory, the other Member States shall have towards it an obligation of aid and assistance by all the means in their power, in accordance with Article 51 of the UN Charter.' More binding language than NATO Art. 5, but EU not equipped to fulfill it militarily."},
        {term: "Plokhy's 'David vs. Goliath' thesis", def: "Ukraine's resistance defends DEMOCRACY itself. The 'sling' propelling Western-supplied weapons is Ukraine's dedication to freedom, independence, and democracy. The outcome of the war is fateful for democracy globally — diverging Ukrainian and Russian trajectories since 1991 (Ukraine: incumbents lose; Russia: they don't) explain the stakes."},
        {term: "Bond's three theses", def: "(1) Europe must build security AGAINST Russia (not with), and likely WITHOUT the US; (2) Ukraine has chosen Europe but faces hurdles (corruption, EU absorption issues, war); (3) Putin's 'besieged fortress' worldview means each subdued neighbor makes the next one a threat — so European defense of E. Europe is geopolitical necessity."}
      ],
      shortAnswerSeeds: [
        "What was the Budapest Memorandum, and why is it relevant to 2014/2022?",
        "Identify three Ukrainian elections in which incumbents lost",
        "Explain what 'little green men' refers to in Crimea 2014",
        "List Waltz's three levels of analysis and apply to the 2022 invasion",
        "What is the bargaining model of war (Fearon 1995), and why did bargaining fail in Russia-Ukraine?",
        "Compare the Realist, Pragmatist, and Idealist responses to Russia's imperial ambitions",
        "What does Article 42.7 TEU say, and why is it being discussed in 2026?",
        "Explain Plokhy's 'David vs. Goliath' framing — what does Ukraine's 'sling' represent?"
      ],
      paragraphSeeds: [
        "Apply Waltz's three levels of analysis (man, state, system) to explain Russia's 2022 invasion of Ukraine. Which level offers the most convincing explanation, and why?",
        "Compare the Realist, Pragmatist, and Idealist schools' prescriptions for how the West should respond to Russian aggression. Which has been ascendant since 2022, and what evidence supports your answer?",
        "What does Plokhy mean by saying the Russia-Ukraine war is a 'fateful question for democracy itself'? Tie his argument to the divergent post-1991 trajectories of Russia and Ukraine.",
        "What does Bond mean by 'European security with Ukraine, against Russia, and without the US'? Discuss the three challenges facing European security architecture and the role of Article 42.7 TEU.",
        "Why has the bargaining model of war (Fearon 1995) failed to produce settlement in Russia-Ukraine? Discuss misperceptions, commitment problems, and issue indivisibility."
      ]
    }
  ],

  readings: [
    {
      id: "kuran",
      title: "Kuran — Now Out of Never: The Element of Surprise in the East European Revolution of 1989",
      modules: ["10"],
      mainArgument: "The 1989 revolutions were genuinely surprising — not because observers were dim but because of structural features of preference falsification under repression. The model: individuals have private preferences AND public preferences (which they manage strategically). Each person has a 'revolutionary threshold' — the size of public opposition at which they'll join. A small change in one person's threshold can trigger a cascading 'revolutionary bandwagon' that flips the whole population. Because thresholds and private preferences are not common knowledge ('pluralistic ignorance'), no one — not the regime, not the opposition, not outside observers — can predict whether a society is on the verge of revolution. So revolutions are simultaneously surprising AND seemingly inevitable in retrospect.",
      keyConcepts: [
        "Preference falsification: gap between private and public preference under repression",
        "Revolutionary threshold (T): size of public opposition at which an individual will switch from supporting government to opposing it",
        "Revolutionary bandwagon: a cascade where each new defection lowers the cost for the next person to defect",
        "Latent bandwagon: a society where thresholds are clustered such that a small perturbation could trigger a cascade",
        "Pluralistic ignorance: misperceptions about the distribution of private preferences in a population",
        "Brecht epigraph: 'The victim of today is the victor of tomorrow / And out of Never grows Now!'"
      ],
      keyCritiques: [
        "Of structuralist theory (Skocpol): explains why revolutions become possible but not why they happen on a particular date",
        "Of rational choice: explains the rarity of revolutions (free-rider problem) but not why they happen",
        "Of relative deprivation theory (Davies, Gurr): discontent is too common in stable societies to predict revolution; level of discontent doesn't correlate with revolt"
      ],
      examQuestions: [
        "What is the main puzzle Kuran addresses? (Brecht line)",
        "What are the main arguments of structuralist, rational choice and relative deprivation theories?",
        "Define preference falsification, revolutionary threshold, revolutionary bandwagon, latent bandwagon",
        "Why can revolutions be simultaneously surprising and inevitable in retrospect?",
        "Is widespread disapproval of a regime sufficient to cause a revolution? (No — distribution of thresholds matters)",
        "What is the 'greengrocer' story and how does it illustrate his argument?"
      ],
      paragraphPrompts: [
        "Explain Kuran's theory of preference falsification and revolutionary thresholds. Why does the model predict that revolutions will be both genuinely surprising AND seemingly inevitable in retrospect?",
        "Compare Kuran's rational-choice-with-thresholds model to (a) Skocpol's structuralist theory and (b) the relative deprivation theory of Davies/Gurr. Why does Kuran think his model better explains 1989?"
      ]
    },
    {
      id: "way",
      title: "Way — The Real Causes of the Color Revolutions",
      modules: ["10"],
      mainArgument: "The literature on color revolutions over-emphasizes diffusion of opposition tactics ('electoral model'), leadership strategy, and popular protest. These are insufficient to explain WHY some autocrats fell (Serbia, Georgia, Ukraine, Kyrgyzstan) and others didn't (Belarus, Russia, Armenia, Azerbaijan). Way (with Levitsky) argues authoritarian stability is determined by TWO STRUCTURAL FACTORS: (1) strength of ties to the West (LINKAGE — economic, political, social), which raises Western willingness to invest in regime change; and (2) authoritarian organizational power — a single highly-institutionalized ruling party, a battle-tested coercive apparatus, OR state discretionary control over the economy (non-privatization or mineral rents). Where linkage was high (Central + SE Europe), no autocrat survived. Where linkage was low (former USSR), success depended on whether the regime had at least one of the three sources of organizational strength.",
      keyConcepts: [
        "Linkage: dense economic, political, social ties to West and US (vs. low-linkage post-Soviet states)",
        "Leverage: the West's ability to use linkage to pressure for democratization",
        "EU conditionality as the strongest form of leverage (offered to Romania even though Belarus/Russia/Ukraine were more democratic at the time)",
        "Single institutionalized ruling party (PCRM in Moldova; Communist Party in China — provides defection-resistance)",
        "Battle-tested coercive apparatus (Armenia post-Karabakh war; vs. Serbia after 4 lost wars; Georgia after secession losses)",
        "State control over economy (Belarus 80% state-owned; oil/gas rents in Russia, Azerbaijan, Kazakhstan)",
        "Bulldozer Revolution (Serbia 2000), Rose Revolution (Georgia 2003), Orange Revolution (Ukraine 2004), Tulip Revolution (Kyrgyzstan 2005)"
      ],
      keyCritiques: [
        "Diffusion alone doesn't explain success (Belarus 2006 followed the model better than Kyrgyzstan 2005 but failed)",
        "Mobilization size doesn't predict outcome (Shevardnadze fled before 'undersized' crowds; Lukashenka survived larger ones)",
        "Strategy follows from structure: nonviolence in Ukraine 2004 because earlier violence had backfired, not because of diffusion"
      ],
      examQuestions: [
        "What are the three main approaches Way critiques (regional diffusion, leadership strategy, popular protest)?",
        "What are Way's two structural variables that determine authoritarian stability?",
        "Name the three sources of authoritarian organizational power",
        "Why did Lukashenka survive 2006 even though the opposition followed the 'electoral model' faithfully?",
        "Why did Shevardnadze fall to relatively small crowds while others survived larger ones?"
      ],
      paragraphPrompts: [
        "Way argues that diffusion theories miss the real causes of color-revolution outcomes. Explain his alternative framework — linkage to the West + organizational power — and apply it to two contrasting cases (e.g., Ukraine 2004 vs. Belarus 2006).",
        "Why did the color revolutions succeed in Serbia, Georgia, Ukraine, and Kyrgyzstan but fail in Russia, Belarus, Armenia, and Azerbaijan? Use Way's framework."
      ]
    },
    {
      id: "agh",
      title: "Ágh — From Nomenklatura to Clientura",
      modules: ["13"],
      mainArgument: "After 1989 the post-communist political elite did not become a Weberian rational-bureaucratic professional elite as Western theorists expected. Instead it became a 'transitional' elite that organized politics on a 'clientura' (clientelistic) model — politics as a business venture for narrow patron-client networks. Ágh classifies this transitional elite by motivation: politicians of morals, of historical vision, by chance, and by profession (old nomenklatura + emerging new professionals). The dominant pattern was a 'magical transformation' from nomenklatura to clientura — old elite networks reshuffled themselves into new clientelistic ones, especially in Southeast Europe and the western republics of the former USSR. Whether this consolidates as a 'neo-traditional' system or transforms into a Europeanized professional elite remains open.",
      keyConcepts: [
        "Heterogeneity of elites: never reached Weberian functional differentiation in C. Europe — state remained powerful in economy and vice versa",
        "Five elite types by background: former nomenklatura, satellite-org officials, dissident intellectuals, technocratic experts, social-movement leaders, business class",
        "Four types by motivation: morals, historical vision, chance, profession",
        "Clientura: politics as a business venture, mutual benefit of insiders, patron-client networks",
        "Three party conceptualizations: business venture (clientura), cooperative association (group interests), public utility (constitutional)",
        "ECE vs. SEE difference: stronger continuity of old patterns in SE Europe and western FSU",
        "Professionalization-cum-Europeanization as the alternative path"
      ],
      examQuestions: [
        "What does Ágh mean by 'clientura' and how does it differ from a Weberian professional elite?",
        "What are Ágh's four motivational types of post-1989 politicians?",
        "What does the 'magical transformation' from nomenklatura to clientura describe?",
        "Identify the three conceptual models of political parties Ágh discusses"
      ],
      paragraphPrompts: [
        "What does Ágh mean by 'from nomenklatura to clientura'? Use his elite typology to explain why post-communist political elites took on a clientelistic rather than Weberian-professional form.",
        "Compare the East-Central European (Poland, Hungary, Czech Republic) and Southeast European trajectories of elite formation, drawing on Ágh's framework."
      ]
    },
    {
      id: "scheppele",
      title: "Scheppele — Foreword to Magyar's Post-Communist Mafia State",
      modules: ["13"],
      mainArgument: "Magyar's diagnosis of the Hungarian regime under Orbán: it is not merely an authoritarian or kleptocratic state but a distinct new political formation — the POST-COMMUNIST MAFIA STATE. The state is run on the principles of an organized-crime syndicate — the 'adopted political family' — with rigorously enforced rules of internal discipline, distribution of spoils to loyalists, and threats (criminal prosecutions, libel suits, tax audits, denial of employment, surveillance) against enemies. Unlike a traditional authoritarian state, the mafia state's purpose is the systematic accumulation of political AND economic power in the hands of one tight-knit family of insiders. The takeover is conducted through legal means — the 'monstrous quality' emerges from how reasonable-looking individual measures combine. Scheppele argues this is a NEW conceptual category that doesn't fit existing typologies of regimes (kleptocracy, oligarchy, authoritarianism, populism are all inadequate).",
      keyConcepts: [
        "Mafia state: a state that functions on the organizational principles of a mafia (not just penetrated by organized crime)",
        "Adopted political family: the inner circle of loyalists who run the state",
        "Legal authoritarianism: takeover proceeds through formally legal means (constitutional changes, legislation)",
        "Three definitions of 'mafia state' (per the lecture): (a) state taken over by organized crime; (b) state where govt/business/organized crime overlap; (c) state modeled on organized-crime syndicate",
        "Hungary as the European exemplar; comparable to Russia/Azerbaijan/Central Asian successor states",
        "Distinguishes from Western corruption (episodic, individual) — mafia state is systematic, cohesive, family-based"
      ],
      examQuestions: [
        "Define 'post-communist mafia state' (Magyar/Scheppele)",
        "How does the mafia-state model differ from kleptocracy, traditional authoritarianism, and Western corruption?",
        "What is the 'adopted political family'?",
        "Why does Scheppele argue this is a NEW conceptual category, not just a variant of existing types?"
      ],
      paragraphPrompts: [
        "What is the 'post-communist mafia state' as defined by Magyar and Scheppele? Distinguish it from kleptocracy, ordinary authoritarianism, and Western corruption — why do they argue it is a distinct conceptual category?",
        "Apply the mafia-state framework to Hungary under Orbán. How do the 'five categories of FIDESZ remake' (institutions, media, economy, civic space, culture) map onto the mafia-state model?"
      ]
    },
    {
      id: "gagnon",
      title: "Gagnon — The Myth of Ethnic War (Ch. 1: The Puzzle of the Yugoslav Wars)",
      modules: ["15"],
      mainArgument: "Western journalistic and academic accounts blamed the Yugoslav wars on 'ancient ethnic hatreds,' tribalism, irrationality — making Yugoslavia the antithesis of the modern West. Gagnon argues this is empirically wrong. Three key pieces of evidence: (1) MASSIVE DRAFT-DODGING — 85-90% of called-up Belgrade Serbs refused to fight; over 200,000 fled the country; even drafted Serb-Bosnians had to be hunted down and forcibly trucked to the front; (2) HOSTILITY TOWARD CO-ETHNIC REFUGEES — Croat refugees in Zagreb, Serb refugees in Belgrade, Bosniak refugees in Sarajevo were all met with bitterness from local 'co-ethnics' on cultural (rural-vs-urban) rather than ethnic grounds; (3) VIOLENCE AGAINST MODERATE CO-ETHNICS — even after Krajina was 'cleansed' of non-Serbs, Krajina extremists harassed, threatened, and killed moderate Serbs who criticized the leadership. CONCLUSION: violence was a STRATEGIC POLICY by elites to demobilize political pluralism and impose POLITICAL HOMOGENEITY. The threat to Milošević was not Croats but Serb democrats demanding economic and political reform.",
      keyConcepts: [
        "'Ancient ethnic hatred' narrative — what Gagnon rejects",
        "Strategic-elite explanation — violence as policy chosen by threatened elites",
        "Political homogenization through violence on heterogeneous social spaces",
        "Three anecdotal cases (draft-dodging, refugee hostility, violence against moderate Serbs)",
        "Demobilization of political pluralism as the goal",
        "Comparison: cultural/rural-vs-urban resentment ≠ ethnic solidarity"
      ],
      examQuestions: [
        "What is Gagnon's central thesis about the Yugoslav wars?",
        "Cite three pieces of evidence Gagnon uses to refute the 'ancient ethnic hatred' narrative",
        "Why did Krajina extremists target moderate Serbs after non-Serbs were cleansed? What does this prove?",
        "How does Gagnon's argument connect to the 'subversive institutions' explanation of Yugoslav collapse?"
      ],
      paragraphPrompts: [
        "Critically evaluate Gagnon's claim that the Yugoslav wars were caused by elite strategy rather than ethnic hatred. Discuss the three categories of evidence he marshals — draft-dodging, refugee hostility, violence against moderate co-ethnics — and assess their persuasiveness.",
        "How does Gagnon's framework reframe our understanding of 'ethnic conflict' generally? What are the implications for how outside powers should analyze and respond to conflicts framed in ethnic terms?"
      ]
    },
    {
      id: "anghel",
      title: "Anghel & Jones — What Went Wrong in Hungary",
      modules: ["17.2"],
      mainArgument: "The provocative thesis: 'What if Hungary was never a democracy?' The 2011 Fundamental Law marks the END of the Hungarian story, not the beginning — the real story starts much earlier, with Orbán's capture of FIDESZ in the early 1990s. Following Auerbach & Kartner, state capture requires four sequential steps: (1) craft a distracting NARRATIVE; (2) NEUTRALIZE watchdogs; (3) secure control over RESOURCES and institutions; (4) REWRITE rules to make the regime un-dislodgeable. By the 2010 election landslide, the first three were already done. WHY: 2008 financial crisis hit Hungary especially hard (Swiss-franc mortgages); 2006 leaked Gyurcsány tape ('we lied morning, noon and night') discredited Socialists; the polarization between Orbán-aligned Christian-nationalist and ex-communist liberal sides was already entrenched. HOW: Orbán captured Fidesz by pitting groups against each other, eliminating intraparty rivals, leveraging party resources for private wealth. Implications for EU enlargement: forward-looking 'stress test' analysis is needed; standard institutional metrics give a misleading picture of stability.",
      keyConcepts: [
        "'Hungary was never a democracy' — provocative reframing",
        "State-capture sequence: narrative → watchdogs → resources → rewrite rules",
        "Orbán's capture of FIDESZ (early 1990s) as the actual start of the slide",
        "2010 election (53% vote, 68% supermajority) as enabled by economic crisis + leaked Gyurcsány tape",
        "2011 Fundamental Law as aftermath, not cause",
        "Standard democracy indices recorded backsliding too late",
        "EU enlargement implications — need for 'stress test' methodology"
      ],
      examQuestions: [
        "What's the provocative reframing Anghel & Jones offer about Hungary?",
        "Explain the four-step state-capture sequence (Auerbach & Kartner)",
        "Why was 2010 the inflection point — what economic and political conditions enabled FIDESZ's supermajority?",
        "What lessons do Anghel & Jones draw for the EU's new enlargement to Western Balkans/Ukraine/Moldova/Georgia?"
      ],
      paragraphPrompts: [
        "Anghel & Jones argue 'Hungary was never a democracy.' What do they mean? Trace the sequence of state capture from Orbán's takeover of Fidesz in the 1990s through the 2011 Fundamental Law, and explain why the standard democracy indices missed the slide.",
        "What lessons does the Hungarian case offer for the EU's current enlargement push? Discuss the failure of pre-accession conditionality to predict post-accession behavior, and the proposed 'stress test' methodology."
      ]
    },
    {
      id: "carothers",
      title: "Carothers — Why Viktor Orbán's Fidesz Party Lost",
      modules: ["17.2"],
      mainArgument: "After 16 years of Fidesz rule, Magyar's Tisza party defeated Orbán in April 2026 despite an extremely tilted playing field (gerrymandering, state-resource use, media dominance, deepfakes, alleged vote-buying). The defeat was a combination of incumbent missteps + opposition resourcefulness. Three Fidesz LIABILITIES: (1) terrible economic record — anemic 0.5% growth, 25% inflation peak; (2) deteriorating public services — especially healthcare (low life expectancy, doctor exodus to Austria/Germany); (3) endemic corruption — tied for most-corrupt EU country with Bulgaria, allegations against Orbán's father and son-in-law. Three Magyar STRATEGIC INNOVATIONS: (1) eschewed culture-war combat, focused on positive 'humane Hungary' message + corruption hammering; (2) campaigned beyond Budapest in small towns/rural areas, including a march to Romania to reach ethnic Hungarians; (3) used social media (Facebook, Instagram) to bypass FIDESZ-dominated traditional media. Linked to MAGA: Trump twice endorsed Orbán, sent Vance to Budapest. LESSONS: for Trump's allies — culture war has limits; corruption is slow-acting poison. For Trump's opponents — challenge populists on patriotism, campaign beyond urban strongholds, focus on non-ideological hot-button issues, use new social-media methods.",
      keyConcepts: [
        "'Tilted playing field' — gerrymandering, state resources, media dominance, deepfakes",
        "Three Fidesz liabilities (economy, services, corruption)",
        "Three Magyar innovations (positive message + anti-corruption; geographic expansion; social media)",
        "MAGA-Fidesz linkage (Trump endorsements, Vance visit)",
        "Bolsonaro 2022 parallel — voters get exhausted by fearmongering",
        "Lessons for both sides of US politics"
      ],
      examQuestions: [
        "List Carothers' three Fidesz liabilities entering the 2026 election",
        "List Magyar's three strategic innovations",
        "What lessons does Carothers draw for US politics from the Hungarian outcome?",
        "What is Magyar's 'inclusive patriotism' strategy?"
      ],
      paragraphPrompts: [
        "After 16 years of dominance, why did Fidesz lose in 2026? Apply Carothers' framework — incumbent missteps + opposition resourcefulness — and explain why the same electoral system that gave Fidesz supermajorities in 2014/2018/2022 amplified its defeat in 2026.",
        "Compare and contrast Orbán's relationship with the MAGA movement vs. Magyar's strategic break from culture-war politics. What does Carothers think US politicians on both sides should learn?"
      ]
    },
    {
      id: "plokhy",
      title: "Plokhy — David vs. Goliath: Defeating Russian Autocracy",
      modules: ["19.1", "19.2"],
      mainArgument: "Ukraine's resistance to Russia is the latest 'David vs. Goliath' duel — and how the war ends is a fateful question for democracy itself. The 'sling' that propels Western-supplied weapons is uniquely Ukrainian — it's woven from Ukraine's dedication to freedom, independence, and democracy. Trace the divergence: Russia abandoned democracy as early as October 1993 (Yeltsin's tank attack on parliament), then 'Operation Successor' brought Putin (1999); through Beslan, Crimea, Donbas, full invasion 2022. Ukraine, by contrast, sustained competitive elections (1994 Kuchma, 2004 Orange Revolution invalidating fraud, 2010 Yanukovych returns, 2014 Euromaidan, 2019 Zelensky landslide) — incumbents lose. By 2024, despite the war, polls showed GROWING Ukrainian support for democratic rule (over 'strong leader'). It is in the US and global democratic interest that 'David' continues to stand up to 'Goliath.'",
      keyConcepts: [
        "David vs. Goliath framing — Ukraine = David, Russia = Goliath, sling = democratic commitment",
        "Russian democracy 'all but destroyed by Russian tanks in October 1993'",
        "'Operation Successor' — Yeltsin's choice of Putin",
        "Putin's path: hyper-presidentialism → autocracy",
        "Beslan 2004 → Putin uses to limit remaining political space",
        "Crimea referendum 2014: Sudeten German parallel (Hitler's pretext)",
        "2014 staged referendum — turnout 30-50% (independent), 50-80% voted reunification → official 83% turnout, 96.8% reunification",
        "September 2022 sham referenda in 4 partly-occupied oblasts (Donetsk, Luhansk, Kherson, Zaporizhzhia)",
        "Ukrainian polls 2020-2024 show RISING support for democracy under fire"
      ],
      examQuestions: [
        "Explain the 'David vs. Goliath' framing — what does the 'sling' represent?",
        "What date does Plokhy identify as the end of Russian democracy? What happened?",
        "What does 'Operation Successor' refer to?",
        "How did Putin's regime use the Beslan tragedy?",
        "What was Andrei Zubov's parallel between Putin's Crimea justification and Hitler's?",
        "What does Ukrainian polling (Plokhy cites) show about democratic preferences during the war?"
      ],
      paragraphPrompts: [
        "Plokhy frames the Russia-Ukraine war as 'David vs. Goliath' with stakes for democracy itself. Reconstruct his argument — what is the 'sling,' and why does the war's outcome matter for democracy beyond Ukraine and Russia?",
        "Trace Plokhy's account of the divergent post-1991 trajectories of Russia and Ukraine. What specific events does he identify as turning points, and how do they support his thesis that Ukraine's democratic resilience is the 'sling' enabling its resistance?"
      ]
    },
    {
      id: "bond",
      title: "Bond — European Security in a Time of War: Standing With Ukraine, Against Russia, and Without the US",
      modules: ["19.1", "19.2"],
      mainArgument: "European security structures have been crumbling since 2014 (Crimea) and especially since 2022 (full invasion). Trump's two terms have shattered confidence in NATO defense guarantees — including the unprecedented threat to Greenland (a NATO ally's autonomous territory). Europe must therefore (1) STAND WITH UKRAINE — Ukraine's accession faces real obstacles (corruption, EU absorption capacity, war itself, Hungary's veto, agricultural competition), but the geopolitical case is overwhelming; (2) STAND AGAINST RUSSIA — Putin's 'besieged fortress' worldview means each subdued neighbor turns the next into a threat; (3) STAND WITHOUT THE US — the US is now actively exacerbating Europe's domestic divisions and supporting right-wing populists. The dormant Article 42.7 TEU mutual-defense clause may need to be activated; Europe must build defense capabilities AND societal resilience against internal threats from political extremism.",
      keyConcepts: [
        "Three pillars: with Ukraine, against Russia, without the US",
        "Crumbling structures: 2014 Crimea + 2022 full invasion + Trump first/second term",
        "Greenland threat — unprecedented NATO-on-NATO threat",
        "August 2025 Trump-Putin Alaska summit — Trump sympathetic to Putin's territorial demands",
        "November 2025 Trump 28-point peace plan — would reward Russia, weaken Ukraine",
        "Putin's 'besieged fortress' worldview — each subdued neighbor makes next a threat",
        "Ukraine's accession obstacles: corruption (NABU/SAPO crisis July 2025), CAP and cohesion fund arithmetic, Hungarian veto, Polish concerns (Volyn massacre, agricultural competition)",
        "Article 42.7 TEU as more binding than NATO Art. 5 but EU not equipped to fulfill",
        "Ian Bond on Russia's historical oscillation: catching up with Europe / rejecting Europe / claiming superiority"
      ],
      examQuestions: [
        "What three things must Europe stand for, against, and without (Bond's title)?",
        "Why does the US Greenland threat matter for European security architecture?",
        "Identify three obstacles to Ukrainian EU accession",
        "What does Article 42.7 TEU say, and why is it more binding than NATO Art. 5?",
        "What does Putin's 'besieged fortress' worldview imply for European defense?"
      ],
      paragraphPrompts: [
        "Reconstruct Bond's argument that Europe must build security 'with Ukraine, against Russia, and without the US.' Discuss the three pillars and the events since 2014 that have made each necessary.",
        "What are the key obstacles to Ukraine's EU accession, and how does Bond suggest the EU should approach them? Discuss internal Ukrainian challenges (corruption), EU absorption issues (CAP, cohesion funds, Hungarian veto), and the Russia-imposed problems (war, occupation, Article 42.7 implications)."
      ]
    }
  ]
};

// Build flashcards from concepts
function buildFlashcards() {
  const cards = [];
  STUDY_DATA.modules.forEach(m => {
    m.keyConcepts.forEach(c => {
      cards.push({
        front: c.term,
        back: c.def,
        category: `Module ${m.num}: ${m.title}`,
        moduleId: m.id
      });
    });
  });
  STUDY_DATA.readings.forEach(r => {
    r.keyConcepts.forEach(c => {
      cards.push({
        front: c,
        back: r.title,
        category: `Reading: ${r.title.split('—')[0].trim()}`,
        readingId: r.id,
        type: 'reading-concept'
      });
    });
  });
  return cards;
}

// Build quiz questions
const QUIZ_QUESTIONS = [
  // Module 10 - Transitions
  {q: "Per Kuran, which country saw its 1989 transition take roughly 10 days?", choices: ["Poland", "Hungary", "East Germany", "Czechoslovakia"], a: 3, mod: "10"},
  {q: "Which type of pre-1989 communist regime tended to produce 'transitions through collapse' (rather than negotiation or smokescreen)?", choices: ["National-consensus", "Bureaucratic-authoritarian", "Patrimonial", "Reform-communist"], a: 1, mod: "10"},
  {q: "In Way's framework, where Western 'linkage' is high, the rate of authoritarian survival in the post-Cold War era has been:", choices: ["High", "Moderate", "Effectively zero", "About 50%"], a: 2, mod: "10"},
  {q: "Way identifies three sources of authoritarian organizational power. Which is NOT one of them?", choices: ["A single, highly institutionalized ruling party", "A battle-tested coercive apparatus", "Discretionary state control over the economy", "Strong civil society organizations"], a: 3, mod: "10"},
  {q: "Per Carothers, the transitions paradigm posits stages in this order:", choices: ["Consolidation → opening → breakthrough", "Opening → breakthrough → consolidation", "Breakthrough → consolidation → opening", "Opening → consolidation → breakthrough"], a: 1, mod: "10"},
  {q: "The 'second wave' (color revolution) cases include all EXCEPT:", choices: ["Serbia 2000", "Belarus 2006", "Georgia 2003", "Ukraine 2004"], a: 1, mod: "10"},
  {q: "Przeworski defines a consolidated democracy as one in which:", choices: ["No party challenges the constitution", "Democratic institutions are 'the only game in town'", "Voter turnout exceeds 80%", "All parties accept the same economic policy"], a: 1, mod: "10"},

  // Module 11 - Institutions
  {q: "Duverger's Law predicts that single-member-district plurality systems tend to produce:", choices: ["Multiparty systems", "Two-party systems", "Dominant-party systems", "No-party systems"], a: 1, mod: "11"},
  {q: "Hungary ended up with a parliamentary system because:", choices: ["The Constitutional Court ruled against direct presidential elections", "A referendum, prompted by rivals to popular reform-Communist Imre Pozsgay, chose parliament-elected presidency", "The Round Table negotiations specified it", "The EU required it"], a: 1, mod: "11"},
  {q: "Poland's first parliament (1991) had ___ parties win seats:", choices: ["6", "12", "29", "45"], a: 2, mod: "11"},
  {q: "Mixed-Member Proportional (MMP) is best exemplified by:", choices: ["United States", "Germany", "Russia post-2016", "United Kingdom"], a: 1, mod: "11"},
  {q: "In a semi-presidential system, voters elect:", choices: ["Only the parliament", "Only the president", "Both the parliament and the president", "Neither (both are appointed)"], a: 2, mod: "11"},
  {q: "Lijphart's 'consensual' (vs. adversarial) democracy is associated with:", choices: ["SMD elections", "Single-party majority cabinets", "PR + multiparty coalitions", "Parliamentary sovereignty"], a: 2, mod: "11"},

  // Module 12 - Economy
  {q: "Which country is the canonical example of 'shock therapy' producing rapid recovery?", choices: ["Romania", "Belarus", "Poland", "Ukraine"], a: 2, mod: "12"},
  {q: "'Political (crony) capitalism' that produced stagnation is most associated with:", choices: ["Czech Republic", "Hungary", "Ukraine and Belarus", "Estonia"], a: 2, mod: "12"},
  {q: "Per Milanovic, the 1990s economic downturn in Russia was comparable to which historical episode?", choices: ["Post-WWI inflation", "Great Depression in the US/Germany", "1973 oil shock", "2008 global financial crisis"], a: 1, mod: "12"},
  {q: "Which is NOT one of the four tasks facing economic reformers?", choices: ["Macroeconomic stabilization", "Microeconomic liberalization (privatization)", "Institutional/structural reform", "Establishing universal basic income"], a: 3, mod: "12"},
  {q: "'Monetary overhang' refers to:", choices: ["Government debt to international banks", "Money stashed at home because there were few goods to buy", "Excess foreign-currency reserves", "Inflation expectations"], a: 1, mod: "12"},

  // Module 13 - Elites
  {q: "Per Ágh, the 'magical transformation' refers to the shift from:", choices: ["Capitalism to socialism", "Nomenklatura to clientura", "Democracy to populism", "Empire to nation-state"], a: 1, mod: "13"},
  {q: "Pre-1989 grand corruption was rare in communist states because:", choices: ["Strict religious morality", "Communism eliminated greed", "State ownership and travel restrictions made stolen wealth unusable", "Frequent purges"], a: 2, mod: "13"},
  {q: "'State capture' refers to:", choices: ["Military takeover", "Private actors systematically influencing state institutions and policies for their own benefit", "Foreign occupation", "Constitutional rewrite"], a: 1, mod: "13"},
  {q: "Per Magyar/Scheppele, the 'mafia state' is best understood as:", choices: ["A state penetrated by drug cartels", "A state run on the principles of an organized crime syndicate", "A failed state controlled by gangs", "Corruption in any post-communist state"], a: 1, mod: "13"},

  // Module 14 - Elections
  {q: "The Effective Number of Parties (ENP) measure adjusts for:", choices: ["Geographic concentration", "Party size — captures how many parties really matter", "Voter turnout", "Campaign spending"], a: 1, mod: "14"},
  {q: "'Top-down' party-system volatility refers to:", choices: ["Voters switching parties between elections", "Parties appearing, disappearing, splitting, or merging", "Elite-led coups", "Constitutional rewrites"], a: 1, mod: "14"},
  {q: "Right populism's core distinction is between:", choices: ["Workers and capitalists", "Authentic native people vs. cosmopolitan elites and immigrants", "Religious and secular", "Federalists and decentralizers"], a: 1, mod: "14"},

  // Module 15 - Nationalism
  {q: "Per Barrington's definition, a 'nation' is distinguished from an ethnic group by:", choices: ["Linguistic uniformity", "Religious adherence", "Belief in the right to territorial self-determination", "Population size"], a: 2, mod: "15"},
  {q: "In Kohn's typology, 'civic' nationalism corresponds to:", choices: ["Eastern Europe", "The Balkans", "Britain, France, Switzerland, US", "Scandinavia only"], a: 2, mod: "15"},
  {q: "A central critique of Kohn's civic/ethnic distinction is:", choices: ["It overestimates Eastern violence", "Western 'civic' nations were also built through coercive cultural homogenization", "It ignores religion", "It was funded by the CIA"], a: 1, mod: "15"},
  {q: "Per Gagnon, Yugoslav violence was primarily:", choices: ["Caused by ancient ethnic hatreds", "A strategic policy by elites to demobilize political pluralism", "Initiated by foreign powers", "An accidental escalation"], a: 1, mod: "15"},
  {q: "Which is one piece of evidence Gagnon uses against the 'ancient ethnic hatred' thesis?", choices: ["High inter-ethnic marriage rates pre-1991", "85-90% of called-up Belgrade Serbs refused to fight", "Public opinion polls showed peace preferences", "All of the above"], a: 3, mod: "15"},
  {q: "The Velvet Divorce refers to:", choices: ["The breakup of Yugoslavia", "The dissolution of the Soviet Union", "The peaceful split of Czechoslovakia", "The Brexit referendum"], a: 2, mod: "15"},
  {q: "The Dayton Accords (1995) divided Bosnia into:", choices: ["Three independent republics", "A unified central state", "A Federation of Bosnia & Herzegovina (Muslim-Croat) and Republika Srpska", "An EU protectorate"], a: 2, mod: "15"},

  // Module 16 - Transitional Justice
  {q: "On the retribution↔reconciliation axis, Spain represents the ___ model:", choices: ["Punishment", "Selective punishment", "Historical clarification", "Amnesia"], a: 3, mod: "16"},
  {q: "South Africa's truth-and-reconciliation commission is an example of which model?", choices: ["Punishment", "Selective punishment", "Historical clarification", "Amnesia"], a: 2, mod: "16"},
  {q: "Lustration refers to:", choices: ["Religious purification rituals after dictatorship", "Vetting/exclusion of former regime collaborators from public office", "Dissolution of secret-police archives", "Constitutional amendments"], a: 1, mod: "16"},
  {q: "The 'Nuremberg defense' problem in transitional justice involves:", choices: ["Whether to use international or domestic courts", "Whether 'I was just following orders' transfers responsibility upward, or whether retroactive prosecution violates rule of law", "How to fund prosecutions", "Whether to grant amnesty"], a: 1, mod: "16"},

  // Module 17.1 - Backsliding
  {q: "Lust & Waldner define democratic backsliding as:", choices: ["A coup", "Deterioration in competitive electoral procedures, civil/political liberties, and accountability", "Loss of an election", "Constitutional amendment"], a: 1, mod: "17.1"},
  {q: "Przeworski's classic finding was that no democracy ever fell when per capita income exceeded:", choices: ["1950s US level", "1975 Argentina's level", "Year 2000 EU average", "Today's Norwegian level"], a: 1, mod: "17.1"},
  {q: "A 'Competitive Authoritarian' regime is one that holds:", choices: ["No elections", "Uncontested elections", "Competitive elections that are not free or fair", "Free and fair elections without rule of law"], a: 2, mod: "17.1"},

  // Module 17.2 - Hungary
  {q: "Scheppele's 'Frankenstate' concept describes a regime built by:", choices: ["Open military coup", "Cherry-picking individually-reasonable institutional components from democracies and combining them in monstrous ways", "Foreign occupation", "Constitutional revolution"], a: 1, mod: "17.2"},
  {q: "Hungary's 2010 Fidesz landslide gave them what % of seats?", choices: ["50%", "53%", "68%", "75%"], a: 2, mod: "17.2"},
  {q: "Fidesz's 'societal remake' under Orbán covered all five categories EXCEPT:", choices: ["Institutions and rule of law", "Media freedom", "Foreign trade balance", "Economy / closing civic spaces / cultural issues"], a: 2, mod: "17.2"},
  {q: "Per Anghel & Jones, the actual start of Hungary's slide was:", choices: ["The 2008 financial crisis", "The 2011 Fundamental Law", "Orbán's capture of Fidesz in the early 1990s", "Hungary's 2004 EU accession"], a: 2, mod: "17.2"},
  {q: "Per Carothers, Magyar's 2026 victory was helped by all EXCEPT:", choices: ["Focus on positive 'humane Hungary' message", "Geographic expansion beyond Budapest into rural areas", "Heavy use of Facebook/Instagram", "Embrace of culture-war rhetoric on LGBTQ and immigration"], a: 3, mod: "17.2"},

  // Module 17.3 - Explaining backsliding
  {q: "The 'bottom-up' mechanism of backsliding emphasizes:", choices: ["Mass-public preference shifts toward 'authoritarian welfare chauvinism'", "Elite calculations about regime preferences", "Foreign interference", "Economic crises"], a: 0, mod: "17.3"},
  {q: "Why is the bottom-up explanation harder to apply in Eastern Europe?", choices: ["E. Europe lacks elections", "E. Europe largely benefited from globalization, hasn't experienced large-scale immigration", "E. Europe has no civil society", "E. Europe is wealthier than the West"], a: 1, mod: "17.3"},
  {q: "The 'end of the end of history' refers to:", choices: ["The end of the Cold War", "The emergence of new ideological projects (e.g., 'illiberal democracy') challenging the 1990s liberal-democracy consensus", "The defeat of communism", "Russia's 2022 invasion"], a: 1, mod: "17.3"},

  // Module 18 - EU
  {q: "The Copenhagen Criteria (1993) require all candidates to have:", choices: ["Adopted the euro", "Stable democratic institutions, rule of law, human rights, functioning market economy", "GDP per capita above €30,000", "5 million population minimum"], a: 1, mod: "18"},
  {q: "The Acquis Communautaire is:", choices: ["The EU treaty", "A 35-chapter body of EU laws/regulations/standards — the 'instruction manual' for a modern democracy", "The euro adoption process", "The Schengen agreement"], a: 1, mod: "18"},
  {q: "Article 7 TEU is notable for:", choices: ["Allowing expulsion of member states", "Providing a complicated multi-stage procedure that requires unanimity for the most serious finding — and provides no expulsion mechanism", "Authorizing economic sanctions", "Creating the European Parliament"], a: 1, mod: "18"},
  {q: "EU spending allocates the largest share to:", choices: ["Defense (40%)", "Agricultural subsidies (39%)", "Research (25%)", "Climate (35%)"], a: 1, mod: "18"},
  {q: "Why has the EU mostly failed to discipline backsliding states?", choices: ["No member supports any sanctions", "Complexity, inertia, partisan protection (e.g., Fidesz in EPP), economic interests, and reluctance to set precedents", "EU lacks any tools", "Russia vetoed it"], a: 1, mod: "18"},

  // Module 19.1 - European security
  {q: "NATO's founding purpose (1949) was famously summarized as:", choices: ["'Defend the free world'", "'Keep the Americans in, the Russians out, and the Germans down'", "'Eternal Atlantic friendship'", "'European unity through arms'"], a: 1, mod: "19.1"},
  {q: "The Warsaw Pact was unique in being:", choices: ["A defensive alliance against the West", "An alliance for invading its own members", "A trade agreement", "A nuclear non-proliferation treaty"], a: 1, mod: "19.1"},
  {q: "'Wandel durch Handel' refers to:", choices: ["German for 'change through trade' — the belief that trade with authoritarian regimes would gradually democratize them", "A NATO doctrine", "A Russian propaganda campaign", "An EU enlargement strategy"], a: 0, mod: "19.1"},
  {q: "The 'credible commitment problem' applied to Russia means:", choices: ["Russia can't keep treaties", "An autocrat cannot guarantee rule of law to elites domestically — so elites park wealth in the rule-of-law West", "NATO can't trust Russia", "EU can't enforce conditionality"], a: 1, mod: "19.1"},
  {q: "Russia's 'four tools' as a revisionist power do NOT include:", choices: ["Weaponization of kleptocracy", "Weaponization of information", "Weaponization of culture", "Weaponization of religion"], a: 3, mod: "19.1"},

  // Module 19.2 - Russia-Ukraine war
  {q: "The Budapest Memorandum (1994) involved Ukraine giving up:", choices: ["Crimea", "Its inherited Soviet nuclear weapons", "Donbas", "Black Sea Fleet"], a: 1, mod: "19.2"},
  {q: "The Orange Revolution (2004) was triggered by:", choices: ["Yanukovych's refusal to sign EU agreement", "Election fraud favoring Viktor Yanukovych over Yushchenko", "Russian invasion", "Constitutional crisis"], a: 1, mod: "19.2"},
  {q: "The 2013-14 Euromaidan protests began as a reaction to:", choices: ["Russian troop movements", "Yanukovych's decision NOT to sign an EU association agreement", "An economic crisis", "An anti-corruption scandal"], a: 1, mod: "19.2"},
  {q: "'Little green men' refers to:", choices: ["Pro-Russian protesters", "Russian soldiers without insignia who occupied Crimea in March 2014", "Ukrainian self-defense forces", "Aliens (joke)"], a: 1, mod: "19.2"},
  {q: "Per Plokhy's 'David vs. Goliath' framing, Ukraine's 'sling' is:", choices: ["Western-supplied weapons", "Ukrainian nationalism", "Its dedication to freedom, independence, and democracy", "NATO support"], a: 2, mod: "19.2"},
  {q: "Waltz's 'three levels of analysis' framework includes:", choices: ["Local, national, international", "Man, state, war (system)", "Past, present, future", "Economic, political, cultural"], a: 1, mod: "19.2"},
  {q: "The bargaining model of war (Fearon 1995) explains war as the result of:", choices: ["Inevitable evil leaders", "A failure of bargaining due to misperceptions, commitment problems, or issue indivisibility", "Military-industrial complex pressures", "Cultural conflict"], a: 1, mod: "19.2"},
  {q: "The Realist school's view of Russia's 2022 invasion is best summarized as:", choices: ["A unique historical aberration", "Surprising and unusual", "Predictable: 'the strong do what they can, the weak suffer what they must'", "Caused by ideology"], a: 2, mod: "19.2"},
  {q: "The Helsinki Final Act (1975) is associated most with which IR school?", choices: ["Realist", "Pragmatist", "Idealist (Wilsonian / neo-Idealist)", "Constructivist"], a: 2, mod: "19.2"},
  {q: "Article 42.7 TEU is:", choices: ["The EU's expulsion clause", "A mutual-defense clause more binding in language than NATO Art. 5, but with limited EU military capacity", "The trade agreement", "The Schengen border code"], a: 1, mod: "19.2"},
  {q: "Per Bond, Europe must build security:", choices: ["With Russia, against Ukraine, with the US", "With the US's full backing", "With Ukraine, against Russia, and without the US", "Through the UN only"], a: 2, mod: "19.2"},
  {q: "The 2026 status of Ukraine in the war is:", choices: ["Russian occupation completed", "Ukrainian victory", "Stalemate on the front line, with Ukraine developing its own defense industry", "Ceasefire signed"], a: 2, mod: "19.2"},

  // FILL-IN-THE-BLANK style (encoded as MC for simplicity)
  {q: "The protests that brought down Slobodan Milošević in 2000 are known as the ___ Revolution.", choices: ["Orange", "Rose", "Bulldozer", "Tulip"], a: 2, mod: "10"},
  {q: "The 2003 Georgian color revolution is known as the ___ Revolution.", choices: ["Orange", "Rose", "Bulldozer", "Tulip"], a: 1, mod: "10"},
  {q: "The 2005 Kyrgyzstan color revolution is known as the ___ Revolution.", choices: ["Orange", "Rose", "Bulldozer", "Tulip"], a: 3, mod: "10"},
  {q: "The 2014 Ukrainian protests against Yanukovych are known as the ___.", choices: ["Orange Revolution", "Euromaidan / Revolution of Dignity", "Bulldozer Revolution", "Maidan Spring"], a: 1, mod: "19.2"},
  {q: "Hungary's 2026 opposition winner Péter Magyar leads the ___ party.", choices: ["MSZP", "Jobbik", "TISZA", "DK"], a: 2, mod: "17.2"}
];

// Export for use in the page
if (typeof window !== 'undefined') {
  window.STUDY_DATA = STUDY_DATA;
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
  window.buildFlashcards = buildFlashcards;
}
