import test from 'ava'
import {NGenerateText}    from '../src/Noun'
import {NErrors}          from '../src/Noun'
import NDictOb            from '../src/NDictionary'
import {NounOb}             from '../src/Noun'

test(t => {
	t.deepEqual([1, 2], [1, 2])
	t.deepEqual(NGenerateText({}),{e:NErrors.NOUN_BASE_UNDEFINED})
	t.is(NGenerateText(NDictOb.cat),'cat')
	t.is(NGenerateText(new NounOb({base:'sally', proper:true})),'Sally')

	new NounOb({base:'arctic', proper:true})
})

//import test from 'tape'

//import {AdjGenerateText}  from './Adjective'
//import {AdjDictOb}        from './AdjDictionary'
//import Gender             from './Gender'
//import {Plurality}        from './Noun'
//import {NPGenerateText}   from './NP'
//import Person             from './Person'
//import {PreDictOb}        from './PreDictionary'
//import {PrePGenerateText} from './PreP'
//import {PrePOb}           from './PreP'
//import {ProGenerateText}  from './Pronoun'
//import {PronounType}      from './Pronoun'
//import {ProOb}            from './Pronoun'
//import {VDictOb}          from './VDictionary'
//import {Tense}            from './Verb'
//import {VGenerateText}    from './Verb'
//import {VPGenerateText}   from './VP'
//import {VPOb}             from './VP'

//test('nouns', function(t) {
	//t.deepEqual(NGenerateText({}),{e:NErrors.NOUN_BASE_UNDEFINED})
	//t.equal(NGenerateText(NDictOb.cat),'cat')
	//t.end()
//})

/*test.skip('everything else', function (t) {

	t.equal(AdjGenerateText(AdjDictOb.big),'big')
	t.equal(NPGenerateText(new NPOb({noun:NDictOb.cat})),'cat')

	t.equal(ProGenerateText(new ProOb({})),null)
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.NoneSelected, plurality:Plurality.NoneSelected, gender:Gender.Male})),null)

	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.First, plurality:Plurality.Singular})),'I')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.Second, plurality:Plurality.Singular})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.Third, plurality:Plurality.Singular, gender:Gender.Male})),'he')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'she')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'it')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:Person.First})),'we')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:Person.Third})),'they')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.First})),'me')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'him')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'her')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'it')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.First})),'us')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Third})),'them')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.First})),'mine')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.Second})),'yours')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'his')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'hers')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:Person.First})),'ours')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:Person.Second})),'yours')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:Person.Third})),'theirs')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.First})),'us')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Third})),'them')

	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.First})),'myself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Second})),'yourself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'himself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'herself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'itself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.First})),'ourselves')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Second})),'yourselves')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Third})),'themselves')


	//t.equal(PrePGenerateText(new PrePOb({pre:PreDictOb.in, np:new NPOb({noun:NDictOb.hat, plurality:Plurality.Singular})})),'in the hat')

	//t.equal(VGenerateText(VDictOb.play),'play')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.play, infinitive:true})),'to play')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.look, person:Person.Third, tense:Tense.Present, plurality:Plurality.Singular})),'looks')

	// https://en.wikipedia.org/wiki/Uses_of_English_verb_forms
	/*
	This article describes the uses of various verb forms in the English language. This includes:

		Finite verb forms such as go, goes and went
	Nonfinite forms such as (to) go, going and gone
	Combinations (catenae) of such forms with auxiliary verbs, such as was going and would have gone

	The uses considered include expression of tense (time reference), aspect, mood and modality, in various configurations.

		For details of how inflected forms of verbs are produced in English, see English verbs. For the grammatical structure of clauses, including word order, see English clause syntax. For certain other particular topics, see the articles listed in the adjacent box.



		The base form or plain form (go, write, climb), which has several uses—as an infinitive, imperative, present subjunctive, and present indicative except in the third-person singular
	The -s form (goes, writes, climbs), used as the present indicative in the third-person singular
	the past tense or preterite (went, wrote, climbed)
	The past participle (gone, written, climbed) – this is identical to the past tense in the case of regular verbs and some irregular ones (here the first two verbs are irregular and the third regular)
	The -ing form (going, writing, climbing), used as a present participle, gerund, and (de)verbal noun

	The verb be has a larger number of different forms (am, is, are, was, were, etc.), while the modal verbs have a more limited number of forms. Some forms of be and of certain other auxiliary verbs also have contracted forms ('s, 're, 've, etc.).

	For full details of how these inflected forms of verbs are produced, see English verbs.
		Verbs in combination

	In English, verbs frequently appear in combinations containing one or more auxiliary verbs and a nonfinite form (infinitive or participle) of a main (lexical) verb. For example:

		The dog was barking very loudly.
		My hat has been cleaned.
		Jane does not really like us.

		The first verb in such a combination is the finite verb, the remainder are nonfinite (although constructions in which even the leading verb is nonfinite are also possible – see § Perfect and progressive nonfinite constructions below). Such combinations are sometimes called compound verbs; more technically they may be called verb catenae, since they are not generally strict grammatical constituents of the clause. As the last example shows, the words making up these combinations do not always remain consecutive.

		For details of the formation of such constructions, see English clause syntax. The uses of the various types of combination are described in the detailed sections of the present article. (For another type of combination involving verbs – items such as go on, slip away and break off – see Phrasal verb.)
	Tenses, aspects and moods

	As in many other languages, the means English uses for expressing the three categories of tense (time reference), aspect and mood are somewhat conflated (see tense–aspect–mood). In contrast to languages like Latin, though, English has only limited means for expressing these categories through verb conjugation, and tends mostly to express them periphrastically, using the verb combinations mentioned in the previous section. The tenses, aspects and moods that may be identified in English are described below (although the terminology used differs significantly between authors). Note that in common usage, particularly in English language teaching, particular tense–aspect–mood combinations such as "present progressive" and "conditional perfect" are often referred to simply as "tenses".
		Tenses
	Present

	Present tense is used, in principle, to refer to circumstances that exist at the present time (or over a period that includes the present time). However the same forms are quite often also used to refer to future circumstances, as in "He's coming tomorrow" (hence this tense is sometimes referred to as present-future or nonpast). For certain grammatical contexts where the present tense is the standard way to refer to the future, see conditional sentences and dependent clauses below. It is also possible for the present tense to be used when referring to no particular real time (as when telling a story), or when recounting past events (the historical present, particularly common in headline language). The present perfect intrinsically refers to past events, although it can be considered to denote primarily the resulting present situation rather than the events themselves.

		The present tense has two moods, indicative and subjunctive; when no mood is specified, it is often the indicative that is meant. In a present indicative construction, the finite verb appears in its base form, or in its -s form if its subject is third-person singular. (The verb be has the forms am, is, are, while the modal verbs do not add -s for third-person singular.) For the present subjunctive, see English subjunctive. (The present subjunctive has no particular relationship with present time, and is sometimes simply called the subjunctive, without specifying the tense.)

	For specific uses of present tense constructions, see the sections below on simple present, present progressive, present perfect and present perfect progressive.
		Past

	Past tense forms express circumstances existing at some time in the past, although they also have certain uses in referring to hypothetical situations (as in some conditional sentences, dependent clauses and expressions of wish). They are formed using the finite verb in its preterite (simple past) form.

		Certain uses of the past tense may be referred to as subjunctives; however the only distinction in verb conjugation between the past indicative and past subjunctive is the possible use of were in the subjunctive in place of was. For details see English subjunctive.

		For specific uses of past tense constructions, see the sections below on simple past, past progressive, past perfect and past perfect progressive. Note also that in certain contexts past events are reported using the present perfect (or even other present tense forms – see above).
	Future

	English is sometimes described as having a future tense, although since future time is not specifically expressed by verb inflection, some grammarians identify only two tenses (present or present-future, and past). The English "future" usually refers to a periphrastic form involving the auxiliary verb will (or sometimes shall when used with a first-person subject; see shall and will). There also exist other ways of referring to future circumstances, including the going to construction, and the use of present tense forms (see above). For particular grammatical contexts where the present tense substitutes for the future, see conditional sentences and dependent clauses below. For discussion and comparison of the various ways of making future reference in English, see going-to future.

		For specific uses of future constructions formed with will/shall, see the sections below on simple future, future progressive, future perfect and future perfect progressive.
		Future-in-the-past

	A "future-in-the-past" tense (or form) is sometimes referred to.[1] This takes essentially the same form as the conditional, that is, it is made using the auxiliary would (or sometimes should in the first person; see shall and will).

	This form has a future-in-the-past meaning in sentences such as She knew that she would win the game. Here the sentence as a whole refers to some particular past time, but would win refers to a time in the future relative to that past time. See Future tense § Expressions of relative tense involving the future.

		For specific uses, see the sections below referring to the conditional (Simple conditional § Notes, § Conditional progressive, Conditional perfect § Notes, § Conditional perfect progressive).
	Aspects
	Simple

	"Simple" forms of verbs are those appearing in constructions not marked for either progressive or perfect aspect (I go, I don't go, I went, I will go, etc., but not I'm going or I have gone).

	Simple constructions normally denote a single action (perfective aspect), as in Brutus killed Caesar, a repeated action (habitual aspect), as in I go to school, or a relatively permanent state, as in We live in Dallas. They may also denote a temporary state (imperfective aspect), in the case of stative verbs that do not use progressive forms (see below).

	For uses of specific simple constructions, see the sections below on simple present, simple past, simple future and simple conditional.
		Progressive

	The progressive or continuous aspect is used to denote a temporary action or state that began at a previous time and continues into the present time (or other time of reference). It is expressed using a form of the auxiliary verb to be (conjugated appropriately for tense etc.) together with the present participle (-ing form) of the main verb: I am reading; Were you shouting?; He will be sitting over there.

		Certain stative verbs make limited use of progressive aspect. Their nonprogressive forms (simple or nonprogressive perfect constructions) are used in many situations even when expressing a temporary state. The main types are described below.

		The copular verb to be does not normally use progressive forms (I am happy, not *I am being happy). However its progressive aspect is used in appropriate situations when the verb expresses the passive voice (We are being followed), and when it has the meaning of "behave" or "act as" (You are being very naughty; He's being a pest).
	The verb to have does not use progressive forms when it expresses possession, broadly understood (I have a brother, not *I'm having a brother), but it does use them in its active meanings (I'm having a party; She's having a baby; He was having a problem starting his car). See also have got below. Other verbs expressing a state of possession or similar, such as possess, own, belong and owe, also do not normally use progressive forms.
	Verbs of mental state, sense perception and similar (know, believe, want, think, see, hear, need, etc.) are generally used without progressive aspect, although some of them can be used in the progressive to imply an ongoing, often temporary situation (I am feeling lonely), or an activity (I am thinking about a problem). See also can see below.
		Verbs denoting positional state normally do use the progressive if the state is temporary: He is standing in the corner. (Compare permanent state: London stands on the banks of the Thames.)

	For specific uses of progressive (continuous) constructions, see the sections below on present progressive, past progressive, future progressive and conditional progressive. For progressive infinitives, see § Perfect and progressive nonfinite constructions. For the combination of progressive aspect with the perfect (he has been reading) see perfect progressive.
		Perfect

	The perfect aspect is used to denote the circumstance of an action's being complete at a certain time. It is expressed using a form of the auxiliary verb have (appropriately conjugated for tense etc.) together with the past participle of the main verb: She has eaten it; We had left; When will you have finished?

	Perfect forms can also be used to refer to states or habitual actions, even if not complete, if the focus is on the time period before the point of reference (We had lived there for five years). If such a circumstance is temporary, the perfect is often combined with progressive aspect (see the following section).

	The implications of the present perfect (that something occurred prior to the present moment) are similar to those of the simple past, although the two forms are generally not used interchangeably – the simple past is used when the time frame of reference is in the past, while the present perfect is used when it extends to the present. For details, see the relevant sections below. For all uses of specific perfect constructions, see the sections below on the present perfect, past perfect, future perfect and conditional perfect.

		By using nonfinite forms of the auxiliary have, perfect aspect can also be marked on infinitives (as in should have left and expect to have finished working), and on participles and gerunds (as in having seen the doctor). For the usage of such forms, see the section below on perfect and progressive nonfinite constructions.

		Note that while all of the constructions referred to here are commonly referred to as perfect (based on their grammatical form), some of them, particularly nonpresent and nonfinite instances, might not be considered truly expressive of the perfect aspect.[2] This applies particularly when the perfect infinitive is used together with modal verbs: for example, he could not have been a genius might be considered (based on its meaning) to be a past tense of he cannot/could not be a genius;[3] such forms are considered true perfect forms by some linguists but not others.[4] For the meanings of such constructions with the various modals, see English modal verbs.
		Perfect progressive

	The perfect and progressive (continuous) aspects can be combined, usually in referring to the completed portion of a continuing action or temporary state: I have been working for eight hours. Here a form of the verb have (denoting the perfect) is used together with been (the past participle of be, denoting the progressive) and the present participle of the main verb.

		In the case of the stative verbs, which do not use progressive aspect (see the above section on the progressive), the plain perfect form is normally used in place of the perfect progressive: I've been here for half an hour (not *I've been being here...).

	For uses of specific perfect progressive (perfect continuous) constructions, see the sections below on the present perfect progressive, past perfect progressive, future perfect progressive and conditional perfect progressive. For perfect progressive infinitives, participles and gerunds, see § Perfect and progressive nonfinite constructions.
		Moods
	Indicative

	Indicative mood, in English, refers to finite verb forms that are not marked as subjunctive and are not imperatives or conditionals. They are the verbs typically found in the main clauses of declarative sentences and questions formed from them, as well as in most dependent clauses (except for those that use the subjunctive). The information that a form is indicative is often omitted when referring to it: the simple present indicative is usually referred to as just the simple present, etc. (unless some contrast of moods, such as between indicative and subjunctive, is pertinent to the topic).
	Subjunctive

	Certain types of clause, mostly dependent clauses, use a verb form identified with the subjunctive mood. The present subjunctive takes a form identical to the bare infinitive, as in It is necessary that he be restrained. There is also a past subjunctive, distinct from the indicative only in the possible use of were in place of was in certain situations: If I were you, ...

	For details of the formation and usage of subjunctive forms in English, see English subjunctive.
		Imperative

	An independent clause in the imperative mood uses the base form of the verb, usually with no subject (although the subject you can be added for emphasis). Negation uses do-support (i.e. do not or don't). For example:

	Now eat your dinner.
		You go and stand over there!
		Don't ever say that word again.

	Sentences of this type are used to give an instruction or order. When they are used to make requests, the word please (or other linguistic device) is often added for politeness:

	Please pass the salt.

		First person imperatives (cohortatives) can be formed with let us (usually contracted to let's), as in "Let's go". Third person imperatives (jussives) are sometimes formed similarly, with let, as in "Let him be released".

	More detail can be found in the Imperative mood article.
		Conditional

	The status of the conditional mood in English is similar to that of the future tense: it may be considered to exist provided the category of mood is not required to be marked morphologically. The English conditional is expressed periphrastically with verb forms governed by the auxiliary verb would (or sometimes should with a first-person singular subject; see shall and will). The modal verb could is also sometimes used as a conditional (of can).

	In certain uses, the conditional construction with would/should may also be described as "future-in-the-past".

		For uses of specific conditional constructions, see the sections below on simple conditional, conditional progressive, conditional perfect and conditional perfect progressive, as well as the section on conditional sentences (and the main article on English conditional sentences).
	Active and passive voice

	The active voice (where the verb's subject is understood to denote the doer, or agent, of the denoted action) is the unmarked voice in English. To form the passive voice (where the subject denotes the undergoer, or patient, of the action), a periphrastic construction is used. In the canonical form of the passive, a form of the auxiliary verb be (or sometimes get) is used, together with the past participle of the lexical verb.

	Passive voice can be expressed in combination together with tenses, aspects and moods, by means of appropriate marking of the auxiliary (which for this purpose is not a stative verb, i.e. it has progressive forms available). For example:

		This room is tidied regularly. (simple present passive)
	It had already been accepted. (past perfect passive)
	Dinner is being cooked right now. (present progressive passive)

	The uses of these various passive forms are analogous to those of the corresponding tense–aspect–mood combinations in the active voice.

		The passive forms of certain of the combinations involving the progressive aspect are quite rare; these include the present perfect progressive (it has been being written), past perfect progressive (it had been being written), future progressive (it will be being written), future perfect progressive (it will have been being written), conditional progressive (it would be being written) and conditional perfect progressive (it would have been being written). Because of the awkwardness of these constructions, they may be paraphrased, for example using the expression in the process of (it has been in the process of being written, it will be in the process of being written, and similar).

	For further details of passive constructions, see English passive voice.
		Negation and questions

	Negation of verbs usually takes place with the addition of the particle not (or its shortened form n't) to an auxiliary or copular verb, with do-support being used if there is otherwise no auxiliary. However, if a sentence already contains a negative word (never, nothing, etc.), then there is not usually any additional not.

	Questions (interrogative constructions) are generally formed using subject–auxiliary inversion, again using do-support if there is otherwise no auxiliary. In negative questions, it is possible to invert with just the auxiliary (should we not help?) or with the contracted negation (shouldn't we help?).

	For full details on negation and question formation, see do-support, English auxiliaries and contractions, and the Negation and Questions sections of the English Grammar article.
		Modal verbs

	English has the modal verbs can, could, may, might, must, shall, should, will, would, and also (depending on classification adopted) ought (to), dare, need, had (better), used (to). These do not add -s for the third-person singular, and they do not form infinitives or participles; the only inflection they undergo is that to a certain extent could, might, should and would function as preterites (past tenses) of can, may, shall and will respectively.

		A modal verb can serve as the finite verb introducing a verb catena, as in he might have been injured then. These generally express some form of modality (possibility, obligation, etc.), although will and would (and sometimes shall and should) can serve – among their other uses – to express future time reference and conditional mood, as described elsewhere on this page.

		For details of the uses of modal verbs, see English modal verbs.
		Uses of verb combination types*/



	// Simple past
	// Main article: Simple past

	// The simple past or past simple, sometimes also called the preterite, consists of the bare past tense of the verb (ending in -ed for regular verbs, and formed in various ways for irregular ones – see English verbs for details). In most questions (and other situations requiring inversion), when negated, and in certain emphatic statements, a periphrastic construction consisting of did and the bare infinitive of the main verb is generally used instead – see do-support.

	// The simple past is used for a single event in the past, for past habitual action, or for a past state:

	// He took the money and ran.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.take, tense:Tense.Past})),'took')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.run, tense:Tense.Past})),'ran')
//
	// I visited them every day for a year.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.visit, tense:Tense.Past})),'visited')

	// I knew how to fight even as a child.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.know, tense:Tense.Past})),'knew')






	//However, for action that was ongoing at the time referred to, the past progressive is generally used instead. For stative verbs that do or do not use progressive aspect when expressing a temporary state, see § Progressive aspect. For the use of could see in place of saw etc., see Have got and can see below.

	//The simple past is often close in meaning to the present perfect. The simple past is used when the event is conceived as occurring at a particular time in the past, or during a period that ended in the past (i.e. it does not last up until the present time). This time frame may be explicitly stated, or implicit in the context (for example the past tense is often used when describing a sequence of past events).

	// I was born in 1980.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.be, tense:Tense.Past})),'was')

	// We turned the oven off two minutes ago.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.turn, tense:Tense.Past})),'turned')

	// She placed the letter on the table, sighed, and left the house.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.place, tense:Tense.Past})),'placed')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.sigh, tense:Tense.Past})),'sighed')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.leave, tense:Tense.Past})),'left')

	// Past progressive
	// At three o'clock yesterday, I was working in the garden.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.work, tense:Tense.Past, continuous:true, person:Person.First})),'was working')

	//For stative verbs that do not use the progressive aspect, the simple past is used instead (At three o'clock yesterday we were in the garden).

	//The past progressive is often used to denote an action that was interrupted by an event,[5][6] or for two actions taking place in parallel:

	// While I was washing the dishes, I heard a loud noise.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.wash, tense:Tense.Past, continuous:true, person:Person.First})),'was washing')

	// While you were washing the dishes, Sue was walking the dog.
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.wash, tense:Tense.Past, continuous:true, person:Person.Second})),'were washing')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.walk, tense:Tense.Past, continuous:true, person:Person.First})),'was walking')

	/*(Interrupted actions in the past can also sometimes be denoted using the past perfect progressive, as described below.)

	The past progressive can also be used to refer to past action that occurred over a range of time and is viewed as an ongoing situation:

		I was working in the garden all day yesterday.

		That could also be expressed using the simple past, as I worked..., which implies that the action is viewed as a unitary event (although the effective meaning is not very different).

	The past progressive shares certain special uses with other past tense constructions; see Conditional sentences § Notes, § Dependent clauses, Expressions of wish § Notes, and § Indirect speech.
		Past perfect

	The past perfect, sometimes called the pluperfect, combines past tense with perfect aspect; it is formed by combining had (the past tense of the auxiliary have) with the past participle of the main verb. It is used when referring to an event that took place prior to the time frame being considered.[7] This time frame may be stated explicitly, as a stated time or the time of another past action:

		We had finished the job by 2 o'clock.
	He had already left when we arrived.

		The time frame may also be understood implicitly from the previous or later context:

		I was eating ... I had invited Jim to the meal but he was unable to attend. (i.e. I invited him before I started eating)
	I had lost my way. (i.e. this happened prior to the time of the past events I am describing or am about to describe)

	Compare He had left when we arrived (where his leaving preceded our arrival), with the form with the simple past, He left when we arrived (where his leaving was concurrent with or shortly after our arrival).

	Note that unlike the present perfect, the past perfect can readily be used with an adverb specifying a past time frame for the occurrence. For example, while it is incorrect to say *I have done it last Friday (the use of last Friday, specifying the past time, would require the simple past rather than the present perfect), there is no such objection to a sentence like "I had done it the previous Friday".[8]

	The past perfect can also be used for states or repeated occurrences pertaining over a period up to a time in the past, particularly in stating "for how long" or since when". However, if the state is temporary and the verb can be used in the progressive aspect, the past perfect progressive would normally be used instead. Some examples with the plain past perfect:

	I had lived in that house for 10 years.
		The children had been in their room since lunchtime.

		For other specific uses of the past perfect, see Conditional sentences § Notes, § Dependent clauses, Expressions of wish § Notes, and § Indirect speech.
		Past perfect progressive

	The past perfect progressive or past perfect continuous (also known as the pluperfect progressive or pluperfect continuous) combines perfect progressive aspect with past tense. It is formed by combining had (the past tense of auxiliary have), been (the past participle of be), and the present participle of the main verb.

		Uses of the past perfect progressive are analogous to those of the present perfect progressive, except that the point of reference is in the past. For example:

		I was tired because I had been running.
		By yesterday morning they had already been working for twelve hours.
		Among the witnesses was John Smith, who had been staying at the hotel since July 10.

	This form is sometimes used for actions in the past that were interrupted by some event[9] (compare the use of the past progressive as given above). For example:

		I had been working on my novel when she entered the room to talk to me.

		This implies that I stopped working when she came in (or had already stopped a short time before); the plain past progressive (I was working...) would not necessarily carry this implication.

		If the verb in question does not use the progressive aspect, then the plain past perfect is used instead (see examples in the previous section).

	The past perfect progressive may also have additional specific uses similar to those of the plain past perfect; see Conditional sentences § Notes, § Dependent clauses, Expressions of wish § Notes, and § Indirect speech.
		Simple present
	Main article: Simple present

	The simple present or present simple is a form that combines present tense with "simple" (neither perfect nor progressive) aspect. In the indicative mood it consists of the base form of the verb, or the -s form when the subject is third-person singular (the verb be uses the forms am, is, are). However, with nonauxiliary verbs it also has a periphrastic form consisting of do (or third-person singular does) with the bare infinitive of the main verb — this form is used in questions (and other clauses requiring inversion) and negations, and sometimes for emphasis. For details of this, see do-support.

		The principal uses of the simple present are given below. More examples can be found in the article Simple present.

		To refer to an action or event that takes place habitually. Such uses are often accompanied by frequency adverbs and adverbial phrases such as always, often, from time to time and never. Examples:

	I always take a shower.
		He writes for a living.

		This contrasts with the present progressive, which is used for actions taking place at the present moment.

		With stative verbs in senses that do not use progressive aspect, to refer to a present or general state, whether temporary, permanent or habitual. (In senses that do use progressive aspect, the present simple is used when the state is permanent or habitual.)

	You are happy.
		I know what to do.
		Denmark lies to the north of Germany.

		When quoting someone or something, even if the words were spoken in the (usually very recent) past:

		The label says "External use only".
		Mary says she's ready.

	To refer to a single completed action, as in recounting the events of a story in the present tense (see historical present), and in such contexts as newspaper headlines, where it replaces the present perfect:

		In Hamlet, Ophelia drowns in a stream.
	40-year-old wins gold medal.

		Sometimes to refer to an arranged future event, usually with a reference to time:

		We leave for Berlin tomorrow at 1 pm.

		In providing a commentary on events as they occur, or in describing some theoretical sequence of events:

		I chop the chives and add them to the mixture.
		According to the manager's new idea, I welcome the guests and you give the presentation.

	In many dependent clauses referring to the future, particularly condition clauses, clauses expressing place and time, and many relative clauses (see § Dependent clauses below):

	If he finds your sweets, he will eat them.
		We will report as soon as we receive any information.

		In certain situations in a temporal adverbial clause, rather than the present progressive:

		We can see the light improving as we speak.

		In colloquial English it is common to use can see, can hear for the present tense of see, hear, etc., and have got for the present tense of have (denoting possession). See have got and can see below.

		For the present subjunctive, see English subjunctive. For uses of modal verbs (which may be regarded as instances of the simple present) see English modal verbs.
		Present progressive
	Main article: Present continuous

	The present progressive or present continuous form combines present tense with progressive aspect. It thus refers to an action or event conceived of as having limited duration, taking place at the present time. It consists of a form of the simple present of be together with the present participle of the main verb and the ending -ing.

		We are cooking dinner now.

		This often contrasts with the simple present, which expresses repeated or habitual action (We cook dinner every day). However, sometimes the present continuous is used with always, generally to express annoyance about a habitual action:

		You are always making a mess in the study.

		Certain stative verbs do not use the progressive aspect, so the present simple is used instead in those cases (see § Progressive aspect above).

	The present progressive can be used to refer to a planned future event:

		We are tidying the attic tomorrow.

		It also appears with future reference in many condition and time clauses and other dependent clauses (see § Dependent clauses below):

	If he's sleeping when you arrive, wake him up.
	I will finish the job while the children are playing.

		It can also refer to something taking place not necessarily at the time of speaking, but at the time currently under consideration, in the case of a story or narrative being told in the present tense (as mentioned above under present simple):

	The king and queen are conversing when Hamlet enters.

		For the possibility of a present subjunctive progressive, see English subjunctive.
		Present perfect

	The present perfect (traditionally called simply the perfect) combines present tense with perfect aspect, denoting the present state of an action's being completed, that is, that the action took place before the present time. (It is thus often close in meaning to the simple past tense, although the two are not usually interchangeable.) It is formed with the present tense of the auxiliary have (namely have or has) and the past participle of the main verb.

	The choice of present perfect or past tense depends on the frame of reference (period or point in time) in which the event is conceived as occurring. If the frame of reference extends to the present time, the present perfect is used. For example:

		I have written a letter this morning. (if it is still the morning)
	He has produced ten plays. (if he is still alive and professionally active)[10][11]
	They have never traveled abroad. (if they are still alive and considered capable of traveling)

	If the frame of reference is a time in the past, or a period that ended in the past, the past tense is used instead. For example: I wrote a letter this morning (it is now afternoon); He produced ten plays (he is now dead or his career is considered over, or a particular past time period is being referred to); They never traveled abroad (similarly). See under Simple past for more examples. The simple past is generally used when the occurrence has a specific past time frame – either explicitly stated (I wrote a book in 1995; the water boiled a minute ago), or implied by the context (for example, in the narration of a sequence of events). It is therefore normally incorrect to write a sentence like *I have written a novel yesterday; the present perfect cannot be used with an expression of past time such as yesterday.[12]

	With already or yet, traditional usage calls for the present perfect: Have you eaten yet? Yes, I've already eaten. However, current informal American speech tends to use the simple past: Did you eat yet? Yes, I ate already.

	Use of the present perfect often draws attention to the present consequences of the past action or event, as opposed to its actual occurrence.[10] The sentence she has come probably means she is here now, while the simple past she came does not.[13] The sentence, “Have you been to the fair?” suggests that the fair is still going on, while the sentence, “Did you go to the fair?” could mean that the fair is over.[14] (See also been and gone below.) Some more examples:

		I have eaten. (implies that I'm no longer hungry)
	We have made the dinner. (implies that the dinner is now ready to eat)
	The weather has gotten cloudier. (implies that it is now more cloudy than previously)

	It may also refer to an ongoing state or habitual action, particularly in saying for how long, or since when, something is the case. For example,

		I have lived in Paris for five years.
		He has held the record since he won his Olympic gold.
		We have eaten breakfast together every morning since our honeymoon.

		This implies that I still live in Paris, that he still holds the record and that we still eat together every morning (although the first sentence may also refer to some unspecified past period of five years). When the circumstance is temporary, the present perfect progressive is often appropriate in such sentences (see below); however, if the verb is one that does not use the progressive aspect, the basic present perfect is used in that case too:

		Amy has been on the swing for ten minutes.

		The present perfect may refer to a habitual circumstance, or a circumstance being part of a theoretical or story narrative being given in the present tense (provided the circumstance is of an event's having taken place previously):

	Whenever I get home, John has usually already arrived.
		According to the plan, the speeches have already been given when the cake is brought out.

		The present perfect may also be used with future reference, instead of the future perfect, in those dependent clauses where future occurrence is denoted by present tense (see § Dependent clauses below). For example:

		When you have written it, show it to me.

		For the possibility of a present perfect subjunctive, see English subjunctive. For special use of the present perfect of get to express possession or obligation, see have got below. For the use of have been in place of have gone, see been and gone below.
		Present perfect progressive

	The present perfect progressive (or present perfect continuous) construction combines some of this perfect progressive aspect with present tense. It is formed with the present tense of have (have or has), the past participle of be (been), and the present participle of the main verb and the ending ″-ing″

This construction is used for ongoing action in the past that continues right up to the present or has recently finished:

		I have been writing this paper all morning.
		Why are his eyes red? He has been crying.

		It is frequently used when stating for how long, or since when, something is the case:

	She has been working here since 1997.
	How long have you been sitting there?
		They have been arguing about it for two weeks.

		In these sentences the actions are still continuing, but it is the past portion of them that is being considered, and so the perfect aspect is used. (A sentence without perfect aspect, such as I am sitting here for three hours, implies an intention to perform the action for that length of time.) With stative verbs that are not used in the progressive, and for situations that are considered permanent, the present perfect (nonprogressive) is used instead; for examples of this see § Present perfect above.
		Simple future

	The term simple future, future simple or future indefinite, as applied to English, generally refers to the combination of the modal auxiliary verb will with the bare infinitive of the main verb. Sometimes (particularly in more formal or old-fashioned English) shall is preferred to will when the subject is first person (I or we); see shall and will for details. The auxiliary is often contracted to 'll; see English auxiliaries and contractions.

	This construction can be used to indicate what the speaker views as facts about the future, including confident predictions:

		The sun will rise tomorrow at 6:14.
	It will rain later this week.

		It may be used to describe future circumstances that are subject to some condition (see also § Conditional sentences):

	He will go there if he can.

		However English also has other ways of referring to future circumstances. For planned or scheduled actions the present progressive or simple present may be used (see those sections for examples). There is also a going-to future, common in colloquial English, which is often used to express intentions or predictions (I am going to write a book some day; I think that it is going to rain). Use of the will/shall construction when expressing intention often indicates a spontaneous decision:

		I know! I'll use this book as a door stop.

	Compare I'm going to use..., which implies that the intention to do so has existed for some time.

	Use of present tense rather than future constructions in condition clauses and certain other dependent clauses is described below under Conditional sentences § Notes and § Dependent clauses.

		The modal verbs will and shall also have other uses besides indicating future time reference. For example:

		I will pass this exam. (often expresses determination in addition to futurity)
	You will obey me! (insistence)
	I will not do it! (negative insistence, refusal)
	At this moment I will tolerate no dissent. (strong volition)
	He hasn't eaten all day; he will be hungry now. (confident speculation about the present)
	One of his faults is that he will make trouble unnecessarily. (habit)
	Shall we get to work? (suggestion)

		For more examples see will and shall in the article on modal verbs, and the article shall and will.
		Future progressive

	The future progressive or future continuous combines progressive aspect with future time reference; it is formed with the auxiliary will (or shall in the first person; see shall and will), the bare infinitive be, and the present participle of the main verb. It is used mainly to indicate that an event will be in progress at a particular point in the future:

		This time tomorrow I will be taking my driving test.
		I imagine we will already be eating when you arrive.

		The usual restrictions apply, on the use both of the future and of the progressive: simple rather than progressive aspect is used with some stative verbs (see Progressive aspect § Notes), and present rather than future constructions are used in many dependent clauses (see § Conditional sentences and § Dependent clauses below).

	The same construction may occur when will or shall is given one of its other uses (as described under § Future simple), for example:

	He will be sitting in his study at this time. (confident speculation about the present)

	Future perfect

	The future perfect combines § perfect aspect with future time reference. It consists of the auxiliary will (or sometimes shall in the first person, as above), the bare infinitive have, and the past participle of the main verb. It indicates an action that is to be completed sometime prior to a future time of perspective, or an ongoing action continuing up to a future time of perspective (compare uses of the present perfect above).

	I shall have finished my essay by Thursday.
		When I finally search him he will have disposed of the evidence.
		By next year we will have lived in this house for half a century.

		For the use of the present tense rather than future constructions in certain dependent clauses, see Conditional sentences § Notes and § Dependent clauses below.

		The same construction may occur when will or shall is given one of its other meanings (see under § Simple future); for example:

	He will have had his tea by now. (confident speculation about the present)
	You will have completed this task by the time I return, is that understood? (giving instruction)

	Future perfect progressive

	The future perfect progressive or future perfect continuous combines perfect progressive aspect with future time reference. It is formed by combining the auxiliary will (or sometimes shall, as above), the bare infinitive have, the past participle been, and the present participle of the main verb.

		Uses of the future perfect progressive are analogous to those of the present perfect progressive, except that the point of reference is in the future. For example:

		He will be very tired because he will have been working all morning.
		By 6 o'clock we will have been drinking for ten hours.

	For the use of present tense in place of future constructions in certain dependent clauses, see Conditional sentences § Notes and § Dependent clauses below.

		The same construction may occur when the auxiliary (usually will) has one of its other meanings, particularly expressing a confident assumption about the present:

		No chance of finding him sober now; he'll have been drinking all day.

	Simple conditional

	The simple conditional or conditional simple, also called conditional present, and in some meanings future-in-the-past simple, is formed by combining the modal auxiliary would with the bare infinitive of the main verb. Sometimes (particularly in formal or old-fashioned English) should is used in place of would when the subject is first person (I or we), in the same way that shall may replace will in such instances; see shall and will. The auxiliary is often shortened to 'd; see English auxiliaries and contractions.

	The simple conditional is used principally in a main clause accompanied by an implicit or explicit condition (if-clause). (This is described in more detail in the article on English conditional sentences; see also § Conditional sentences below.) The time referred to may be (hypothetical) present or future. For example:

		I would go tomorrow (if she asked me).
	If I were you, I would see a doctor.
		If she had bought those shares, she would be rich now.

		In some varieties of English, would (or 'd) is also regularly used in the if-clauses themselves (If you'd leave now, you'd be on time), but this is often considered nonstandard. This is widespread especially in spoken American English in all registers, though not usually in more formal writing.[15] There are also situations where would is used in if-clauses in British English too, but these can usually be interpreted as a modal use of would (e.g. If you would listen to me once in a while, you might learn something).[16] For more details, see English conditional sentences § Use of will and would in condition clauses.

	For the use of would after the verb wish and the expression if only, see § Expressions of wish.

		The auxiliary verbs could and might can also be used to indicate the conditional mood, as in the following:

		If the opportunity were here, I could do the job. (= ... I would be able to do ... )
	If the opportunity were here, I might do the job. (= ... maybe I would do ...)

	Forms with would may also have "future-in-the-past" meaning:

		We moved into the cottage in 1958. We would live there for the next forty years.

		See also Indirect speech § Notes and § Dependent clauses. For other possible meanings of would and should (as well as could and might), see the relevant sections of English modal verbs.
		Conditional progressive

	The conditional (present) progressive or conditional continuous combines conditional mood with progressive aspect. It combines would (or the contraction 'd, or sometimes should in the first person, as above) with the bare infinitive be and the present participle of the main verb. It has similar uses to those of the simple conditional (above), but is used for ongoing actions or situations (usually hypothetical):

	Today she would be exercising if it were not for her injury.
		He wouldn't be working today if he had been given the time off.

	It can also have future-in-the-past meanings:

		We didn't know then that we would be waiting another three hours.

	For the use of would in condition clauses, see Simple conditional § Notes above (see also § Conditional sentences and Dependent clauses § Notes below). For use in indirect speech constructions, see § Indirect speech. For other uses of constructions with would and should, see English modal verbs. For general information on conditionals in English, see English conditional sentences (and also § Conditional sentences below).
	Conditional perfect

	The conditional perfect construction combines conditional mood with perfect aspect, and consists of would (or the contraction 'd, or sometimes should in the first person, as above), the bare infinitive have, and the past participle of the main verb. It is used to denote conditional situations attributed to past time, usually those that are or may be contrary to fact.

	I would have set an extra place if I had known you were coming.
		I would have set an extra place (but I didn't because someone said you weren't coming). (implicit condition)

	For the possibility of use of would in the condition clauses themselves, see Simple conditional § Notes (see also § Dependent clauses below). For more information on conditional constructions, see § Conditional sentences below, and the article English conditional sentences.

		The same construction may have "future-in-the-past" meanings (see Indirect speech). For other meanings of would have and should have, see English modal verbs.
		Conditional perfect progressive

	The conditional perfect progressive or conditional perfect continuous construction combines conditional mood with perfect progressive aspect. It consists of would (or sometimes should in the first person, as above) with the bare infinitive have, the past participle been and the present participle of the main verb. It generally refers to a conditional ongoing situation in hypothetical (usually counterfactual) past time:

		I would have been sitting on that seat if I hadn't been late for the party.

	Similar considerations and alternative forms and meanings apply as noted in the above sections on other conditional constructions.
		Have got and can see

	In colloquial English, particularly British English, the present perfect of the verb get, namely have got or has got, is frequently used in place of the simple present indicative of have (i.e. have or has) when denoting possession, broadly defined. For example:

		Formal: I have three brothers; Does he have a car?
		Informal: I've got three brothers; Has he got a car?

	Note that in American English, the form got is used in this idiom, even though the standard past participle of get is gotten.

		The same applies in the expression of present obligation: I've got to go now may be used in place of I have to (must) go now.

	In very informal registers, the contracted form of have or has may be omitted altogether: I got three brothers.[17]

	Another common idiom is the use of the modal verb can (or could for the past tense or conditional) together with verbs of perception such as see, hear, etc., rather than the plain verb. For example:

		I see three houses or I can see three houses.
		I hear a humming sound or I can hear a humming sound.

		Aspectual distinctions can be made, particularly in the past tense:

		I saw it (event) vs. I could see it (ongoing state).

	Been and gone

	In perfect constructions apparently requiring the verb go, the normal past participle gone is often replaced by the past participle of the copula verb be, namely been. This gives rise to sentences of contrasting meaning.

		When been is used, the implication is that, at the time of reference, the act of going took place previously, but the subject is no longer at the place in question (unless a specific time frame including the present moment is specified). When gone is used, the implication is again that the act of going took place previously, but that the subject is still at (or possibly has not yet reached) that place (unless repetition is specified lexically). For example:

		My father has gone to Japan. (he is in Japan, or on his way there, now)
	My father has gone to Japan five times. (he may or may not be there now)
	My father has been to Japan. (he has visited Japan at some time in his life)
	My father has been in Japan for three weeks. (he is still there)
	When I returned, John had gone to the shops. (he was out of the house)
	By the time I returned, John had gone to the shops three times. (he may or may not still be there)
	When I returned, John had been to the shops. (the shopping was done, John was likely back home)
	When I returned, John had been at the shops for three hours. (he was still there)

	Note that been is used in such sentences in combination with to as if it were a verb of motion (being followed by adverbial phrases of motion), which is different from its normal uses as part of the copula verb be. Compare:

	Sue has been to the beach. (as above; Sue went to the beach at some time before now)
	Sue has been on the beach. (use of been simply as part of be; she spent time on the beach)

	The above sentences with the present perfect can be further compared with alternatives using the simple past, such as:

	My father went to Japan.

		As usual, this tense would be used if a specific past time frame is stated ("in 1995", "last week") or is implied by the context (e.g. the event is part of a past narrative, or my father is no longer alive or capable of traveling). Use of this form does not in itself determine whether or not the subject is still there.
		Conditional sentences
	Main article: English conditional sentences

	A conditional sentence usually contains two clauses: an if-clause or similar expressing the condition (the protasis), and a main clause expressing the conditional circumstance (the apodosis). In English language teaching, conditional sentences are classified according to type as first, second or third conditional; there also exist "zero conditional" and mixed conditional sentences.

		A "first conditional" sentence expresses a future circumstance conditional on some other future circumstance. It uses the present tense (with future reference) in the condition clause, and the future with will (or some other expression of future) in the main clause:

		If he comes late, I will be angry.

		A "second conditional" sentence expresses a hypothetical circumstance conditional on some other circumstance, referring to nonpast time. It uses the past tense (with the past subjunctive were optionally replacing was) in the condition clause, and the conditional formed with would in the main clause:

		If he came late, I would be angry.

		A "third conditional" sentence expresses a hypothetical (usually counterfactual) circumstance in the past. It uses the past perfect in the condition clause, and the conditional perfect in the main clause:

		If he had come late, I would have been angry.

		A "mixed conditional" mixes the second and third patterns (for a past circumstance conditional on a not specifically past circumstance, or vice versa):

	If I knew Latin, I wouldn't have made that mistake just now.
	If I had gotten married young, I would have a family by now.

		The "zero conditional" is a pattern independent of tense, simply expressing the dependence of the truth of one proposition on the truth of another:

		If Brian is right then Fred has the jewels.

		See also the following sections on expressions of wish and dependent clauses.
		Expressions of wish

	Particular rules apply to the tenses and verb forms used after the verb wish and certain other expressions with similar meaning.

		When the verb wish governs a finite clause, the past tense (simple past or past progressive as appropriate) is used when the desire expressed concerns a present state, the past perfect (or past perfect progressive) when it concerns a (usually counterfactual) past state or event, and the simple conditional with would when it concerns a desired present action or change of state. For example:

		I wish you were here. (past tense for desired present state)
	Do you wish you were playing in this match? (past progressive for present ongoing action)
	I wish I had been in the room then. (past perfect for counterfactual past state)
	I wish they had locked the door. (past perfect for counterfactual past action)
	I wish you would shut up! (desired present action)
	Do you wish it would rain? (desired present change of state)

	The same forms are generally used independently of the tense or form of the verb wish:

		I wished you were there. (past tense for desired state at the time of wishing)

	The same rules apply after the expression if only:

	If only he knew French!
		If only I had looked in the bedroom!
		If only they would stop talking!

		In finite clauses after would rather and it's (high) time, the past tense is used:

	I'd rather you came with me.
	It's time they gave up.

	After would rather the present subjunctive is also sometimes possible: I'd rather you/he come with me.

	After all of the above expressions (though not normally it's (high) time) the past subjunctive were may be used instead of was:

	I wish I were less tired.
		If only he were a trained soldier.

		Note that other syntactic patterns are possible with most of these expressions. The verb wish can be used with a to-infinitive or as an ordinary transitive verb (I wish to talk; I wish you good health). The expressions would rather and it's time can also be followed by a to-infinitive.

	After the verb hope the above rules do not apply; instead the logically expected tense is used, except that often the present tense is used with future meaning:

		I hope you get better soon.

		Indirect speech

	Verbs often undergo tense changes in indirect speech. This commonly occurs in content clauses (typically that-clauses and indirect questions), when governed by a predicate of saying (thinking, knowing, etc.) which is in the past tense or conditional mood.

		In this situation the following tense and aspect changes occur relative to the original words:

		§ Present changes to past:

		"I like apples." → He said that he liked apples.
	"We are riding." → They claimed that they were riding.
	"You have sinned." → I was told that I had sinned.

    § Simple past changes to past perfect (and sometimes past progressive to past perfect progressive):

	"They finished all the wine earlier." → He thought they had finished all the wine earlier.

		This change does not normally apply, however, when the past tense is used to denote an unreal rather than a past circumstance (see expressions of wish, conditional sentences and dependent clauses):

	"I would do anything you asked." → He said he would do anything she asked.

    § Future changes to conditional, also referred to as future-in-the-past (i.e. will/shall changes to would/should):

	"The match will end in a draw." → He predicted that the match would end in a draw.

		The modals can and may change to their preterite forms could and might :

		"We may attend." → She told us that they might attend.

		Verb forms not covered by any of the above rules (verbs already in the past perfect, or formed with would or other modals not having a preterite equivalent) do not change. Note that application of the above rules is not compulsory; sometimes the original verb tense is retained, particularly when the statement (with the original tense) remains equally valid at the moment of reporting:

		"The earth orbits the sun." → Copernicus stated that the earth orbits the sun.

		Note also that the above tense changes do not apply when the verb of saying (etc.) is not past or conditional in form; in particular there are no such changes when that verb is in the present perfect: He has said that he likes apples.

		For further details, and information about other grammatical and lexical changes that take place in indirect speech, see indirect speech and sequence of tenses. For related passive constructions (of the type it is said that and she is said to), see English passive voice § Passive constructions without an exactly corresponding active.
		Dependent clauses

	Apart from the special cases referred to in the sections above, many other dependent clauses use a tense that might not logically be expected – in particular the present tense is used when the reference is to future time, and the past tense is used when the reference is to a hypothetical situation (in other words, the form with will is replaced by the present tense, and the form with would by the past tense). This occurs in condition clauses (as mentioned above), in clauses of time and place, and in many relative clauses:

		If he finds your sweets, he will eat them.
		We will report as soon as we receive any information.
		The bomb will explode where it lands.
		Go up to the first person that you see.

		In the above examples, the simple present is used instead of the simple future, even though the reference is to future time. Examples of similar uses with other tense–aspect combinations are given below:

		We will wash up while you are tidying. (present progressive instead of future progressive)
	Please log off when you have finished working. (present perfect instead of future perfect)
	If we were that hungry, we would go into the first restaurant that we saw. (simple past instead of simple conditional)
	We would be searching the building while you were searching the grounds. (past progressive instead of conditional progressive)
	In that case the dogs would find the scent that you had left. (past perfect instead of conditional perfect)

	This does not apply to all dependent clauses, however; if the future time or hypothetical reference is expressed in the dependent clause independently of the main clause, then a form with will or would in a dependent clause is possible:

		This is the man who will guide you through the mountains.
		We entered a building where cowards would fear to tread.

		Uses of nonfinite verbs

	The main uses of the various nonfinite verb forms (infinitives, participles and gerunds) are described in the following sections. For how these forms are made, see § Inflected forms of verbs above. For more information on distinguishing between the various uses that use the form in -ing, see -ing: Uses.
		Bare infinitive

	A bare infinitive (the base form of the verb, without the particle to), or an infinitive phrase introduced by such a verb, may be used as follows:

	As complement of the auxiliary do, in negations, questions and other situations where do-support is used:

		Do you want to go home?
		Please do not laugh.

		As complement of will (shall) or would (should) in the future and conditional constructions described above:

		The cat will come home.
		We should appreciate an answer at your earliest convenience.

		More generally, as complement of any of the modal verbs can, could, may, might, must, shall, should, will, would (including would rather), and also dare and need in their modal-like uses:

		I can speak Swedish.
		Need you use so much flour?
		I dare say he will be back.

		As complement of the expression had better:

		You had better give back that telephone.

		As second complement of the transitive verbs let (including in the expression "let's ...", short for "let us"), make, have (in the sense of cause something to be done) and bid (in archaic usage). These are examples of raising-to-object verbs (the logical subject of the governed infinitive is raised to the position of direct object of the governing verb):

	That made me laugh. (but passive voice: I was made to laugh; see under to-infinitive below)
	We let them leave.
		Let's play Monopoly!
	I had him look at my car.
		She bade me approach her. (archaic)

	As second or sole complement of the verb help (the to-infinitive can also be used):

	This proposal will help (to) balance the budget.
		Can you help me (to) get over this wall?

		As second complement of verbs of perception such as see, hear, feel, etc., although in these cases the present participle is also possible, particularly when an ongoing state rather than a single action is perceived:

		We saw him try to escape. (with present participle: We saw him trying to escape.)
	She felt him breathe on her neck. (with present participle: She felt him breathing on her neck.)

	As a predicative expression in pseudo-cleft sentences of the following type:

		What I did was tie the rope to the beam.
		What you should do is invite her round for dinner.

													   After why, in elliptical questions:

		Why bother?

		The form of the bare infinitive is also commonly taken as the dictionary form or citation form (lemma) of an English verb. For perfect and progressive (continuous) infinitive constructions, see § Perfect and progressive nonfinite constructions below.
		To-infinitive

	The to-infinitive consists of the bare infinitive introduced by the particle to. Outside dictionary headwords, it is commonly used as a citation form of the English verb ("How do we conjugate the verb to go?") It is also commonly given as a translation of foreign infinitives ("The French word boire means 'to drink'.")

	Other modifiers may be placed between to and the verb (as in to boldly go; to slowly drift away), but this is sometimes regarded by some as a grammatical or stylistic error – see split infinitive for details.

																																																				The main uses of to-infinitives, or infinitive phrases introduced by them, are as follows:

	As complement of the modal and auxiliary verbs ought (to) and used (to):

	We ought to do that now.
		I used to play outside every day when I was a child.

		As complement of many other verbs used intransitively, including need and dare (when not used as modal-like verbs), want, expect, try, hope, agree, refuse, etc. These are raising-to-subject verbs, where the logical subject is promoted to the position of subject of the governing verb. With some verbs the infinitive may carry a significantly different meaning from a gerund: compare I stopped to talk to her with I stopped talking to her, or I forgot to buy the bread with I forgot buying the bread.

		I need to get to a telephone.
		Try not to make so many mistakes.
		They refused to assist us.

		As second complement of certain transitive verbs. These are mostly raising-to-object verbs, as described above for the bare infinitive; however, in some cases, it is the subject of the main clause that is the logical subject of the infinitival clause, as in "John promises Mary to cook", where the person who will cook is John (the subject of the main sentence), and not Mary (the object).

	I want him to be promoted.
		He expects his brother to arrive this week.

		As an adverbial modifier expressing purpose, or sometimes result (also expressible using in order to in the first case, or so as to in either case):

	I came here to listen to what you have to say.
		They cut the fence to gain access to the site.
		She scored three quick goals to level the score.

		As a subject of a sentence or as a predicative expression. (A gerund can often be used for this also.[18])

	To live is to suffer.
		For them to be with us in this time of crisis is evidence of their friendship.

		In apposition to a subject expletive pronoun it, in sentences of the following type:

		It is nice to live here.
		It makes me happy to feed my animals.

		Alone in certain exclamations or elliptical sentences, and in certain sentence-modifying expressions:

		Oh, to be in England ...
	To think that he used to call me sister.
		To be honest, I don't think you have a chance.

	In certain fixed expressions, such as in order to (see above), so as to, as if to, about to (meaning on the point of doing something), have to (for obligation or necessity). For more on the expression am to, is to, were to, etc. (usually expressing obligation or expectation), see am to.

		We are to demolish this building.
		He smiled as if to acknowledge his acquiescence.

		In elliptical questions (direct or indirect), where no subject is expressed (but for those introduced by why, see bare infinitive above):

	Well, what to do now?
		I wondered whether to resign at that point.

		As a modifier of certain nouns and adjectives:

		the reason to laugh
	the effort to expand
	anxious to get a ticket

	As a relative clause (see English relative clauses § Nonfinite relative clauses). These modify a noun, and often have a passive-like construction where the object (or a preposition complement) is zero in the infinitive phrase, the gap being understood to be filled by the noun being modified. An alternative in the prepositional case is to begin with a prepositional phrase containing a relative pronoun (as is done sometimes in finite relative clauses).

	the thing to leave behind (the thing understood as the object of leave)
	a subject to talk loudly about (a subject understood as the complement of about; see also stranded preposition)
	a subject about which to talk loudly (alternative to the above, somewhat more formal)
	the man to save us (no passive-like construction, the man understood as the subject of save)

	As a modifier of an adjective, again with a passive-like construction as above, here with the gap understood to be filled by the noun modified by the adjective phrase:

		easy to use
	nice to look at

	In many of the above uses, the implied subject of the infinitive can be marked using a prepositional phrase with for: "This game is easy for a child to play", etc. However this does not normally apply when the infinitive is the complement of a verb (other than the copula, and certain verbs that allow a construction with for, such as wait: "They waited for us to arrive"). It also does not apply in elliptical questions, or in fixed expressions such as so as to, am to, etc. (although it does apply in in order to).

	When the verb is implied, the to-infinitive may be reduced to simply to: "Do I have to?" See verb phrase ellipsis.

		For perfect and progressive infinitives, such as (to) have written and (to) be writing, see § Perfect and progressive nonfinite constructions below.
		Present participle

	The present participle is one of the uses of the -ing form of a verb. This usage is adjectival or adverbial. The main uses of this participle, or of participial phrases introduced by it, are as follows. (Uses of gerunds and verbal nouns, which take the same -ing form, appear in sections below.)

	In progressive and perfect progressive constructions, as described in the relevant sections above:

		The man is fixing my bike.
		We had been working for nine hours.

		As an adjective phrase modifying a noun:

		the flower opening up
	the news supporting the point

	As an adjectival phrase modifying a noun phrase that is the object of a verb, provided the verb admits this particular construction. (For alternative or different constructions used with certain verbs, see the sections on the bare infinitive and to-infinitive above.)

	I saw them digging a hole.
		We prefer it standing over there.

		As an adverbial phrase, where the role of subject of the nonfinite verb is usually understood to be played by the subject of the main clause (but see dangling participle). A participial clause like this may be introduced by a conjunction such as when or while.

	Looking out of the window, Mary saw a car go by. (it is understood to be Mary who was looking out of the window)
	We peeled the apples while waiting for the water to boil.

		More generally, as a clause or sentence modifier, without any specifically understood subject

	Broadly speaking, the project was successful.

		In a nominative absolute construction, where the participle is given an explicit subject (which normally is different from that of the main clause):

	The children being hungry, I set about preparing tea.
		The meeting was adjourned, Sue and I objecting that there were still matters to discuss.

		For present participle constructions with perfect aspect (e.g. having written), see § Perfect and progressive nonfinite constructions below.

		Present participles may come to be used as pure adjectives (see Types of participle). Examples of participles that do this frequently are interesting, exciting, and enduring. Such words may then take various adjectival prefixes and suffixes, as in uninteresting and interestingly.
		Past participle

	English past participles have both active and passive uses. In a passive use, an object or preposition complement becomes zero, the gap being understood to be filled by the noun phrase the participle modifies (compare similar uses of the to-infinitive above). Uses of past participles and participial phrases introduced by them are as follows:

	In perfect constructions as described in the relevant sections above (this is the chief situation where the participle is active rather than passive):

	He has fixed my bike.
		They would have sung badly.

		In forming the passive voice:

		My bike was fixed yesterday.
		A new church is being built here.

		As an adjectival predicative expression used in constructions with certain verbs (some of these are described under English passive voice):

	Will you have your ear looked at by a doctor?
		I found my bike broken.

		As an adjective phrase directly modifying a noun (see also reduced relative clause):

	The bag left on the train cannot be traced.

		Used adverbially, or (with a subject) in a nominative absolute construction:

		Hated by his family, he left the town for good.
													  The bomb defused, he returned to his comrades.

		The last type of phrase can be preceded with the preposition with: With these words spoken, he turned and left.

		As with present participles, past participles may function as simple adjectives: "the burnt logs"; "we were very excited". These normally represent the passive meaning of the participle, although some participles formed from intransitive verbs can be used in an active sense: "the fallen leaves"; "our fallen comrades".
		Gerund

	The gerund takes the same form (ending in -ing) as the present participle, but is used as a noun (or rather the verb phrase introduced by the gerund is used as a noun phrase). Many uses of gerunds are thus similar to noun uses of the infinitive. Uses of gerunds and gerund phrases are illustrated below:

		As subject or predicative expression:

		Solving problems is satisfying.
		My favorite activity is spotting butterflies.

		As object of certain verbs that admit such constructions:

		I like solving problems.
		We tried restarting the computer.

		In a passive-type construction after certain verbs, with a gap (zero) in object or complement position, understood to be filled by the subject of the main clause (see English passive voice § Additional passive constructions):

	That floor wants/needs scrubbing.
		It doesn't bear thinking about.

	As complement of certain prepositions:

		No one is better at solving problems.
		Before jogging, she stretches.
		After investigating the facts, we made a decision.
		That prevents you from eating too much.

		It is considered grammatically correct to express the agent (logical subject) of a gerund using a possessive form (they object to my helping them), although in informal English a simple noun or pronoun is often used instead (they object to me helping them). For details see fused participle.

		For gerund constructions with perfect aspect (e.g. (my) having written), see § Perfect and progressive nonfinite constructions below.
		Perfect and progressive nonfinite constructions

	There are also nonfinite constructions that are marked for perfect, progressive or perfect progressive aspect, using the infinitives, participles or gerunds of the appropriate auxiliaries. The meanings are as would be expected for the respective aspects: perfect for prior occurrence, progressive for ongoing occurrence at a particular time. (Passive voice can also be marked in nonfinite constructions – with infinitives, gerunds and present participles – in the expected way: (to) be eaten, being eaten, having been eaten, etc.)

	Examples of nonfinite constructions marked for the various aspects are given below.

		Bare infinitive:

		You should have left earlier. (perfect infinitive; for similar constructions and their meanings see English modal verbs)
	She might be revising. (progressive; refers to an ongoing action at this moment)
	He must have been working hard. (perfect progressive; i.e. I assume he has been working hard)

	To-infinitive:

	He is said to have resigned. (perfect infinitive; for this particular construction see said to)
	I expect to be sitting here this time tomorrow. (progressive)
	He claims to have been working here for ten weeks. (perfect progressive)

	Present participle:

		Having written the letter, she went to bed. (perfect)
	The man having left, we began to talk. (perfect, in a nominative absolute construction)
	Having been standing for several hours, they were beginning to feel tired. (perfect progressive)

	Past participle:

		We have been waiting a long time. (progressive, used only as part of a perfect progressive construction)

	Gerund:

		My having caught the spider impressed the others. (perfect)
	We are not proud of having been drinking all night. (perfect progressive)

	Other aspectual, temporal and modal information can be marked on nonfinite verbs using periphrastic constructions. For example, a "future infinitive" can be constructed using forms such as (to) be going to eat or (to) be about to eat.
		Deverbal uses

	Certain words are formed from verbs, but are used as common nouns or adjectives, without any of the grammatical behavior of verbs. These are sometimes called verbal nouns or adjectives, but they are also called deverbal nouns and deverbal adjectives, to distinguish them from the truly "verbal" forms such as gerunds and participles.

		Besides its nonfinite verbal uses as a gerund or present participle, the -ing form of a verb is also used as a deverbal noun, denoting an activity or occurrence in general, or a specific action or event (or sometimes a more distant meaning, such as building or piping denoting an object or system of objects). One can compare the construction and meaning of noun phrases formed using the -ing form as a gerund, and of those formed using the same -ing form as a deverbal noun. Some points are noted below:

		The gerund can behave like a verb in taking objects: crossing the river cost many lives. The deverbal noun does not take objects, although the understood object may be expressed by a prepositional phrase with of: the crossing of the river cost many lives (an indirect object is expressed using to or for as appropriate: the giving of the award to John).
	The gerund takes modifiers (such as adverbs) that are appropriate to verbs: eating heartily is good for the health. The deverbal noun instead takes modifiers appropriate to nouns (especially adjectives): his hearty eating is good for his health.
		The deverbal noun can also take determiners, such as the definite article (particularly in denoting a single action rather than a general activity): the opening of the bridge was delayed. Gerunds do not normally take determiners except for possessives (as described below).
	Both deverbal nouns and gerunds can be preceded by possessive determiners to indicate the agent (logical subject) of the action: my taking a bath (see also above under gerund and at fused participle for the possible replacement of my with me); my taking of a bath. However, with the deverbal noun there are also other ways to express the agent:
		Using a prepositional phrase with of, assuming that no such phrase is needed to express an object: the singing of the birds (with a gerund, this would be the birds' singing). In fact both possessives and of phrases can be used to denote both subjects and objects of deverbal nouns, but the possessive is more common for the subject and of for the object; these are also the assumed roles if both are present: John's wooing of Mary unambiguously denotes a situation where John wooed Mary, not vice versa.
		Using a prepositional phrase with by (compare similar uses of by with the passive voice): the raising of taxes by the government. This is not possible with the gerund; instead one could say the government's raising taxes.
	Where no subject is specified, the subject of a gerund is generally understood to be the subject (or "interested party") of the main clause: I like singing loudly means I like it when I myself sing; Singing loudly is nice implies the singer is the person who finds it nice. This does not apply to deverbal nouns: I like loud singing is likely to mean that I like it when others sing loudly. This means that a sentence may have alternative meanings depending on whether the -ing form is intended as a gerund or as a deverbal noun: in I like singing either function may be the intended one, but the meaning in each case may be different (I like to sing, if gerund; I like hearing others sing, if deverbal noun).

	Some -ing forms, particularly those such as boring, exciting, interesting, can also serve as deverbal adjectives (distinguished from the present participle in much the same way as the deverbal noun is distinguished from the gerund). There are also many other nouns and adjectives derived from particular verbs, such as competition and competitive from the verb compete (as well as other types such as agent nouns). For more information see verbal noun, deverbal noun and deverbal adjective. For more on the distinction between the various uses of the -ing form of verbs, see -ing.
		Notes

	For example, Jacqueline Morton, English Grammar for Students of French, 6th Edition, Olivia and Hill Press, 2009, p. 82.
	Jeanette S. DeCarrico (December 1986). "Tense, Aspect, and Time in the English Modality System". TESOL Quarterly. 20 (4): 665–682. JSTOR 3586517.
	Tim Stowell. UCLA. Tense and Modals. Page 9.
	Jeanette S. DeCarrico (June 1987). "Comments on Jeanette S. DeCarrico's "Tense, Aspect, and Time in the English Modality System". Response to Nelson: Modals, Meaning, and Context". TESOL Quarterly. 21 (2): 382–389. JSTOR 3586745.
	Differentiating between Simple Past and Past Progressive. eWriting.
		Quiz: Past Continuous and Past Simple – Interrupted Activities. BBC World Service Learning English
	Conditional Verb Forms. Guide to Grammar and Writing.
		Comrie, Bernard, Tense, Cambridge Univ. Press, 1985, pp. 78–79.
	Past Perfect Progressive Tense
	Present Perfect. Guide to Grammar and Writing.
		Sequence of Tenses. Guide to Grammar and Writing.
		The Meaning of Aspect. Edict Functional Grammar.
		Payne, Thomas Edward (1997). Describing morphosyntax: a guide for field linguists. Cambridge University Press. p. 240.
	Chapter 6: Verbs: Perfect and Progressive Aspect.
		Pearson Longman, Longman Exams Dictionary, grammar guide: "It is possible to use would in both clauses in U.S. English, but not in British English: U.S.: The blockades wouldn't happen if the police would be firmer with the strikers. British: The blockades wouldn't happen if the police were firmer with the strikers."
	The English-Learning and Languages Review, "Questions and Answers". Retrieved 3 December 2012.
	Have got, Peter Viney, wordpress.com

	"Being is doing" may be more natural than the abstract and philosophical sounding "To be is to do." See English Page - Gerunds and Infinitives Part 1

	References

	Raymond Murphy, English Grammar in Use, 3rd edition, 2004

	Categories:

		English grammar

	Navigation menu

	Not logged in
	Talk
	Contributions
	Create account
	Log in

	Article
	Talk

	Read
	Edit
	View history

	Search

	Main page
	Contents
	Featured content
	Current events
	Random article
	Donate to Wikipedia
	Wikipedia store

	Interaction

	Help
	About Wikipedia
	Community portal
	Recent changes
	Contact page

	Tools

	What links here
	Related changes
	Upload file
	Special pages
	Permanent link
	Page information
	Wikidata item
	Cite this page

	Print/export

	Create a book
	Download as PDF
	Printable version

	Languages

	Simple English
	Türkçe
	Tiếng Việt

	Edit links

	This page was last edited on 22 June 2017, at 15:30.
	Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.

		Privacy policy
	About Wikipedia
	Disclaimers
	Contact Wikipedia
	Developers
	Cookie statement
	Mobile view

	Wikimedia Foundation
	Powered by MediaWiki*/



	//const n = new VPOb({verb:VDictOb.look})





	//t.end()

//})
