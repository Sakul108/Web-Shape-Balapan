import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Link2, Check } from "lucide-react"
import fig1 from "../assets/images/kaski/fig1.webp"
import fig2 from "../assets/images/kaski/fig2.webp"
import fig3 from "../assets/images/kaski/fig3.webp"
import fig4 from "../assets/images/kaski/fig4.webp"
import fig5 from "../assets/images/kaski/fig5.webp"
import fig6 from "../assets/images/kaski/fig6.webp"
import fig7 from "../assets/images/kaski/fig7.webp"
import fig8 from "../assets/images/kaski/fig8.webp"
import fig9 from "../assets/images/kaski/fig9.webp"
import fig10 from "../assets/images/kaski/fig10.webp"
import fig11 from "../assets/images/kaski/fig11.webp"


const SITE_URL = "https://shape-balapan.ird.com.np"

const KASKI_PATH = "/projects/kaski-case-study"

const NAVY = "#183B4E"
const GOLD = "#DDA853"
const CREAM = "#F5EEDC"



const P = ({ children }) => (
  <p className="text-[16px] sm:text-[17px] text-justify mb-6" style={{ color: NAVY, lineHeight: 1.9 }}>
    {children}
  </p>
)

const H = ({ children }) => (
  <h2 className="font-black mt-12 mb-5 leading-snug"
    style={{ color: NAVY, fontSize: "clamp(20px, 2.6vw, 26px)" }}>
    {children}
  </h2>
)

const Caption = ({ children, className = "" }) => (
  <p className={`text-[13px] sm:text-sm ${className}`} style={{ color: "rgba(24,59,78,0.75)", lineHeight: 1.6 }}>
    {children}
  </p>
)


const Figure = ({ src, alt, caption, maxWidth }) => (
  <figure className="my-8">
    <img src={src} alt={alt} loading="lazy" className="w-full h-auto block"
      style={{ maxWidth: maxWidth || "100%" }} />
    <Caption className="mt-3">{caption}</Caption>
  </figure>
)


const FigureBeside = ({ src, alt, caption, maxWidth }) => (
  <figure className="my-8 flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4">
    <img src={src} alt={alt} loading="lazy" className="w-full h-auto block shrink-0"
      style={{ maxWidth: maxWidth || "100%" }} />
    <Caption>{caption}</Caption>
  </figure>
)

const Quote = ({ children }) => (
  <blockquote className="my-8 pl-5" style={{ borderLeft: `4px solid ${GOLD}` }}>
    {children}
  </blockquote>
)

const QuoteLine = ({ children }) => (
  <p className="text-[16px] sm:text-[17px] mb-2" style={{ color: NAVY, lineHeight: 1.9 }}>{children}</p>
)

/* ---------- Page ---------- */

const KaskiCaseStudy = () => {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const goBack = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "instant" })
    navigate("/projects?section=case-study")
  }

  const copyLink = async () => {
    const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    const origin = isLocal ? SITE_URL : window.location.origin
    const url = `${origin}${KASKI_PATH}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt("Copy this link:", url)
    }
  }

  return (
    <main className="w-full" style={{ background: CREAM }}>

      {/* HEADER */}
      <section className="px-6 sm:px-10"
        style={{ background: NAVY, borderBottom: `4px solid ${GOLD}`, padding: "clamp(40px, 8vw, 72px) 0" }}>
        <div className="max-w-3xl mx-auto px-0 sm:px-0">
          <a href="/projects?section=case-study" onClick={goBack}
            className="inline-flex items-center gap-2 mb-8 text-[13px] font-bold uppercase tracking-widest"
            style={{ color: GOLD, textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to Projects
          </a>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.75 rounded-full" style={{ background: GOLD }} />
            <span className="text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
              Team 2 · Rethinking Assessment
            </span>
          </div>

          <h1 className="font-black leading-tight mb-5"
            style={{ color: CREAM, fontSize: "clamp(28px, 5vw, 46px)" }}>
            When learning outcomes are not met:
            <br />
            <span style={{ color: GOLD }}>A case study of fifth grade students in Kaski, Nepal</span>
          </h1>

          <p className="text-[15px] sm:text-base mb-6" style={{ color: "rgba(245,238,220,0.8)", lineHeight: 1.7 }}>
            <span className="font-bold" style={{ color: GOLD }}>Contributors: </span>
            Aastha Ghimire, Rabina Poudel, Elvina Baral, Upsana Thapa
          </p>

          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[14px]"
            style={{ background: "transparent", color: CREAM, border: "1.5px solid rgba(245,238,220,0.35)", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,238,220,0.10)" }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent" }}
          >
            {copied ? <Check size={14} /> : <Link2 size={14} />}
            {copied ? "Link copied" : "Copy share link"}
          </button>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-16">

        <P>
          Take a pen and paper because we are about to take you back to your English classroom in fifth
          grade. Identify subject, verb, and object in the following sentences:
        </P>

        <div className="mb-6" style={{ color: NAVY, lineHeight: 1.9 }}>
          <p className="text-[16px] sm:text-[17px]">1. Joey drinks chocolate milk everyday.</p>
          <p className="text-[16px] sm:text-[17px]">Verb:</p>
          <p className="text-[16px] sm:text-[17px]">Subject:</p>
          <p className="text-[16px] sm:text-[17px]">Object:</p>
        </div>
        <P>The answer is at the end of this article.</P>
        <P>You got that correct? Ok next.</P>

        <div className="mb-6" style={{ color: NAVY, lineHeight: 1.9 }}>
          <p className="text-[16px] sm:text-[17px]">2. She is singing joyfully.</p>
          <p className="text-[16px] sm:text-[17px]">Verb:</p>
          <p className="text-[16px] sm:text-[17px]">Subject:</p>
          <p className="text-[16px] sm:text-[17px]">Object:</p>
        </div>
        <P>The answer is at the end of this article.</P>

        <P>
          Did you get that correct? Take a moment to remember your teachers because of whom you are
          able to understand Subject-Verb Agreement. In the English language, it is easier to understand
          “who or what performs an action” when verbs agree with their respective subject (Putri, 2023).
          Verbs in sentences are modified according to time of the action and the number of subjects the
          verb possesses (Karshiboyeva, 2026). It is an important fundamental concept in English
          grammar because tense, voice, adjective clause, parallelism, and many other rules build on
          SVA. In New York state, the third grade curriculum includes a requirement to ensure
          subject-verb and pronoun-antecedent agreement (NYLearns). The following questions are
          required for third graders:
        </P>

        <Figure
          src={fig1}
          alt="Two IXL practice questions on subject-verb agreement for third graders"
          caption="Figure 1: Questions for subject-verb agreement from IXL for third graders."
        />

        <P>
          Academic standards and learning outcomes are set by the concerned bodies to ensure that
          students learn what is required of them. In Nepal, the Curriculum Development Centre has set
          certain standards for schools all over the country, primarily followed by government schools, as
          private schools tend to go beyond the standards set by the government. We looked at the
          curriculum from grade one to five; the basics of singular/plural nouns and singular/plural verbs
          are touched upon in grade three; tenses such as present simple, past simple, past continuous,
          present continuous, and simple future are included in the grade five textbook (CDC E-Library,
          2022).
        </P>

        <Figure
          src={fig2}
          alt="Textbook exercise: make sentences from the table below"
          caption="Figure 2: Making sentences with correct subject and verb for third graders. Chapter 3, page 22."
          maxWidth="640px"
        />

        <P>
          Looking at these requirements, we set out to teach tenses to fifth graders at a public school in
          Kaski district from August 29 to September 9. Our logic was that students were already familiar
          with SVA. We aimed to observe the difference between a group of students who received both
          assessment of learning and assessment for learning and a group of students who received only
          assessment of learning. We didn’t anticipate that we’d meet with the ground reality of
          classrooms: fifth graders in that school were not able to form basic sentences in English. So we
          swiftly shifted to making this summer research project a teaching project. During the process we
          identified a number of elements that need to be addressed before educators design curriculum
          and assessment standards in Nepal. We are presenting it as an account of one classroom, just
          as we saw it. The identities of students have been changed, but the works presented by those
          students are of their own.
        </P>

        <H>Students prioritize completing assignments over asking for help</H>

        <Figure
          src={fig3}
          alt="Illustration of a student holding her homework, with chalkboard notes asking why students are not confident to ask for help"
          caption="Figure 3: Figure generated using AI."
        />

        <P>
          A significant difference was observed between students' homework performance and their
          performance during independent assessment. Some students submitted correct and
          well-completed homework, but were unable to answer similar questions correctly when
          assessed independently in the classroom.
        </P>

        <P>
          Drishti was one of the academically strong students in the class who stood first. Her homework
          was completed correctly; however, she later stated that she had taken help from her brother
          while completing it.
        </P>

        <Quote>
          <QuoteLine>“आज त मेरो बिग्रेछ होला, आज मैले आफैँ गरेको हो”</QuoteLine>
          <QuoteLine>“There might be some mistakes in my work because I did it entirely on my own today.”</QuoteLine>
        </Quote>

        <P>
          When Drishti said this while turning in her work one day, we initiated a conversation to know the
          reality of what she implied. That was when we found out that she completed her previous
          assignments with the help of elder brother. During the independent assessment, she made
          mistakes in several questions, despite the questions being based on concepts covered during
          the learning activities.
        </P>

        <FigureBeside
          src={fig4}
          alt="Drishti's homework: 'mama is using his mobile' with subject, verb and object circled and labelled"
          caption="Figure 4: An example of the assignment Drishti turned in. She completed this with the help of her brother."
          maxWidth="420px"
        />

        <Figure
          src={fig5}
          alt="Drishti's end-of-chapter test: 'The boy is player football' and 'The girls is beautiful'"
          caption="Figure 5: This is the test Drishti took at the end of the chapter."
          maxWidth="620px"
        />

        <P>
          Drishti is one representative of the classroom where students feel more comfortable to lie to
          teachers than ask for help. Another stark example of this classroom culture was observed when
          students completed assignments on the chapter not taught them to yet. Our student researchers
          asked students to identify subject, verb, and object from the sentences published in the chapter
          of tenses. “We made sure to explain to each student that the task was to identify SVO, not
          tenses,” Rabina emphasized. Yet some students turned in assignments where they correctly
          identified Tense-Aspect-Mood, the chapter not taught to them. This raised questions about how
          the students obtained the answers.
        </P>

        <Figure
          src={fig6}
          alt="Pritesh's notebook page with sentences and their tenses correctly identified"
          caption="Figure 6: Pritesh correctly identified tenses in these sentences."
          maxWidth="480px"
        />

        <P>
          However, the test he took at the end of the chapter indicates a gap in knowledge. The contrast
          between their highly accurate homework and their incorrect assessment responses suggests
          that the homework may have been completed with the help of external sources. Possible
          sources may include assistance from family members, teachers, online searches, or AI tools
          even though AI use cannot be confirmed solely from the submitted homework and assessment
          results.
        </P>

        <Figure
          src={fig7}
          alt="Pritesh's end-of-chapter test, with sections on helping verbs, verb choice and making own sentences"
          caption="Figure 7: This is the test that Pritesh took at the end of the chapter. It demonstrates a gap in knowledge in simple tenses and subject verb agreement."
        />

        <P>
          The comparison between homework and independent assessment showed that answer
          accuracy in homework was not always a reliable indicator of actual learning. Independent
          assessment was therefore important in identifying whether students could apply the concepts
          without external assistance. These assessments can then be used to identify learning gaps and
          then help students; this is what assessment for learning intends to do.
        </P>

        <P>
          Our hypothesis is that when students get more opportunities to take tests that do not reflect final
          grades, they shall seek help from teachers in classrooms. The classroom culture right now can
          be changed not by eliminating examinations or reducing homework, but by telling students that
          making mistakes is a wonderful way to learn. Anyone who has grown up in Nepal knows that
          our classrooms do not encourage making mistakes and the fear of reprimand for not turning in
          assignments is high. Unless this culture isn’t addressed and worked on, introducing so-called
          “foreign methods” is unlikely to work.
        </P>

        <P>
          Overall, the collected assignments and assessments suggest that some students may have
          focused more on completing and submitting the assignment correctly than on understanding the
          concepts behind the answers.
        </P>

        <H>Scores can be a sheer luck unless tested with challenge</H>

        <P>
          At SHAPE Balapan we prioritize play not to let go of challenging cognitive tasks, but to make
          sure that children feel supported and safe during those challenging tasks, so it shouldn’t come
          as a surprise when we push for tests that push students to learn. And we say this after
          observing a test paper that could have deceived a teacher if it was not designed to challenge
          the learner.
        </P>

        <P>Bibek correctly identified subject, verb, and object in the following sentence:</P>

        <p className="text-[16px] sm:text-[17px] mb-2 pl-6" style={{ color: NAVY, lineHeight: 1.9 }}>1. Cows eat grass.</p>
        <P>Subject: Cows, verb: eat, object: grass.</P>

        <P>
          A teacher is likely to think that the student got the grasp on the concept. Alright, let us move
          forward to another sentence in the same assessment.
        </P>

        <p className="text-[16px] sm:text-[17px] mb-2 pl-6" style={{ color: NAVY, lineHeight: 1.9 }}>2. We love our teacher.</p>
        <P>Bibek identified <em>we love</em> as the subject, <em>our</em> as the verb, and <em>teacher</em> as the object.</P>

        <p className="text-[16px] sm:text-[17px] mb-2 pl-6" style={{ color: NAVY, lineHeight: 1.9 }}>3. He sang beautifully.</p>
        <P>Bibek identified <em>he</em> as the subject, <em>sang</em> as the verb, and <em>beautifully</em> as the object.</P>

        <p className="text-[16px] sm:text-[17px] mb-2 pl-6" style={{ color: NAVY, lineHeight: 1.9 }}>4. I can speak four languages.</p>
        <P>Bibek identified <em>I can</em> as the subject, <em>speak</em> as the verb, and <em>four languages</em> as the object.</P>

        <Figure
          src={fig8}
          alt="Bibek's classwork: 'I can speak four languages' with subject, verb and object written out"
          caption="Figure 8: Bibek’s in class assignment."
          maxWidth="640px"
        />

        <P>
          It is high time to pause and evaluate what is going on here. Did Bibek get the first question
          correct because he asked the following questions:
        </P>

        <div className="mb-6 pl-6" style={{ color: NAVY, lineHeight: 1.9 }}>
          <p className="text-[16px] sm:text-[17px]">1. Who is doing the task?</p>
          <p className="text-[16px] sm:text-[17px]">2. What is the task?</p>
          <p className="text-[16px] sm:text-[17px]">3. The doer does the task to/with what or whom?</p>
        </div>

        <P>
          If Bibek had asked these questions in the first sentence, he would not have thought love, a verb,
          to be the subject in the second sentence. Also, if he writes ‘our’ as the verb, this shows that he
          might not have a clear understanding of verbs. The next step here is to help Bibek understand
          that someone performs work in a sentence and mitigate his learning gap.
        </P>

        <P>
          In the third sentence, he chose beautifully as the object which was tricky because the concept of
          transitive verb and intransitive verb hasn’t been introduced yet; however, we see the concern
          more with whether he was able to choose the subject and the verb correctly because he seems
          to be applying a three-slot template (subject, verb, object) and not asking what each word
          actually does. This is also the reason why his object is correct in all sentences except the third
          sentence that doesn’t have an object. Beautifully is used as an adverb here which could be
          confusing to a student who has learnt to divide the sentence into three chunks and categorize
          subject, verb and object.
        </P>

        <P>
          In the fourth sentence, the learning gap is seen in the concept of auxiliary verbs which can be
          addressed once the main verb lands well. When both can and speak show up in a sentence, it
          is the right time to introduce helping verbs and main verbs.
        </P>

        <P>
          It is crucial to meet students where they are while designing lesson plans but also to have a
          clear end-goal or else students are likely to be left behind in knowledge but upgraded to higher
          classrooms due to more lenient policies.
        </P>

        <H>Follow up on learning outcomes</H>

        <P>
          As stated before, the learning outcomes for grade three do include making sentences with
          different subjects. We found quite a few exercises in the textbook throughout.
        </P>

        <FigureBeside
          src={fig9}
          alt="Third grade textbook exercise: choose the correct forms to complete the sentences"
          caption="Figure 9: This exercise is in the third grade textbook."
          maxWidth="520px"
        />

        <FigureBeside
          src={fig10}
          alt="Third grade textbook exercise: make as many sentences as possible from the table"
          caption="Figure 10: This exercise is in the third grade textbook."
          maxWidth="520px"
        />

        <P>The textbook for fourth grade also has exercises to make sentences with different subjects.</P>

        <Figure
          src={fig11}
          alt="Fourth grade textbook exercise: make as many negative sentences as possible from the table below"
          caption="Figure 11: English book published by Curriculum Development Centre. Chapter 4, Page 41."
          maxWidth="620px"
        />

        <P>
          This evidence demonstrates that the concept itself isn’t missing from the curriculum, rather the
          learning outcomes aren’t being met before promoting students to higher class. Task in figure 9
          addresses singular subject with singular verb. The task in figure 10 aims to teach that auxiliary
          verbs too change based on the subject. After third grade, the exercises return in grade four with
          a longer list of forms (<em>is/are</em>, <em>don't/doesn't</em>, <em>haven't/hasn't</em>, <em>wasn't/weren't</em>).
          By grade five, students have met subject-verb agreement in print for at least two years. Yet the
          fifth graders we taught could not form basic sentences and struggled with subject-verb agreement.
        </P>

        <P>
          Our hypothesis behind why fifth graders are not familiar with subject-verb agreement is that they
          aren’t taught grammar with explicit technical terms. We make this hypothesis also from our
          winter camp in December, 2025 at a private school in Butwal; students in that school could
          speak and write fluent English, but they weren’t learned in subject-verb agreement as a rule.
          The English textbooks do not include explanations behind grammar rules which raises a
          question: where do students read from? Figure 10 gives two options in brackets, and a child can
          choose one without knowing why. All other exercises assume the rule and test it, but they do not
          teach it. In the pages we reviewed, we did not find an explanation of what a singular or plural
          subject is, how to tell one from the other, or how the verb changes with it. The textbook asks
          students to practise a rule it never states.
        </P>

        <P>
          If the explanation is not in the book, it has to come from somewhere else: a teacher's oral
          explanation, a tuition class, a guidebook, or an older sibling at home. Each of these is unevenly
          available. A student like Drishti, who has a brother to help with assignments get the homework
          done, but doesn’t really study it. Other students get the assignments done anyhow with the help
          of the internet now. This also changes how we read the homework-versus-assessment gap. But
          when tested in class, all these exercises fail in preparation. The classroom culture becomes all
          about filling in the answer without students having to put in effort to read the chapter on their
          own or not having resources to read on their own. Students who turn to someone else for
          answers may be responding sensibly to a book that offers practice but no detailed explanation
          suitable for elementary school students’ cognitive and linguistic development.
        </P>

        <P>
          Standards tell us what a child should be able to do by the end of a grade, but they do not tell us
          whether the materials, or the classroom, give the child proper support to get there. It doesn’t
          even tell if teachers are getting enough resources to help students before they promote them to
          a higher class. Hence, we strongly recommend the Ministry of Government to establish a
          system where the learning outcomes are being monitored strictly rather than bypassing the
          requirements in order to promote students. Because how did the students reach fifth grade
          without learning how to form basic sentences? Asking this question does justice to students who
          will be promoted again this year without getting the help they require.
        </P>

        <H>Reflection by Rabina Poudel</H>

        <Quote>
          <QuoteLine>“Yo sabae bhanda ugra class ho feri, baccha haru lai herna garo huna sakxa”</QuoteLine>
          <QuoteLine>“This is the worst class in the school, so it might be a little hard to handle the students” the class
            teacher cautioned us before we started our lessons there.</QuoteLine>
        </Quote>

        <P>
          They were fifth graders, and as lively
          as they were, I realized getting their attention and keeping them on a task was a real challenge.
          On my second day, one student bluntly said, “the lesson is boring” when asked why he wasn't
          paying attention. “Was our lesson really disengaging or was he struggling to understand?,” I
          wondered.
        </P>

        <P>
          Hearing my struggle, a friend in SHAPE Balapan gave me an idea of using rewards. The next
          day, I walked into the classroom with a bag of chocofun and announced, ”Whoever stays
          engaged, asks and answers questions and completes their work will get a reward.” Suddenly,
          the dynamics shifted. Students had questions to ask and answers to share, all while keeping an
          eager eye to the chocofuns on the desk. They competed to answer, even prompting their friends
          to pay attention. Some even urged me to go forward with the lesson and teach them new
          material saying that they already understood the concept. Engagement made the class
          effortless; it was my best day in the entire teaching experience there. At that moment, I thought
          of wanting to be an educator not driven by the dread realities of the education system in Nepal,
          but by the pure joy of a curious and motivated class. When curiosity and participation are
          rewarded, students stop being afraid of asking questions or making mistakes. Even if they
          initially engage just for reward, the initial spark may open the door to genuine intrinsic
          motivation. Ultimately, they may develop a deep connection to learning.
        </P>

        <P>
          While bringing treats or costly rewards isn't sustainable for every classroom, we can definitely
          think of creative, low to no cost rewards. We tried to put zero-cost reward in action by pairing
          grammar practise with drawing. We asked students if they liked to draw. When they
          enthusiastically said yes, we gave them the personal freedom to draw anything of their choice
          and then compose sentences about their artwork to practise subject-verb agreement. They were
          excited to create and share their work. Other ways we can build rewards for children especially
          for elementary students include game based activities, giving special responsibilities like asking
          them to teach their peers and providing meaningful recognition for their efforts. Rewarding and
          encouraging students does not just benefit the learners; it creates a deeply rewarding
          experience for the teacher as well.
        </P>

        <P>
          With this experience, I will try to integrate rewards while designing and delivering lessons to
          students in the future. However, participation does not always point to understanding. I want to
          become more attentive to this distinction. After all, teaching is as much about learning as it is
          about teaching. I will continue to explore and experiment with different approaches.
        </P>

        <H>Reflection by Elvina Baral</H>

        <P>
          We initially planned on teaching tenses. For our first activity, we chose Anand, one of the
          students, and requested he speak a few sentences about what his friend was doing. He stayed
          silent for a long time. So, we asked Pratik to try instead. But, he too, struggled to respond. This
          was the first indication that students’ foundations in English were much weaker than we
          anticipated. This forced us to rethink our entire lesson plan. Instead of moving directly with
          tenses, we decided to work with basic concepts of Subject Verb Agreement. Yet, even after
          simplifying the material, students were still struggling. We soon realized that before moving to
          grammar, students needed help with sentence formation and identifying the subjects, verbs and
          objects. Terms like “noun”, “pronoun”, “adjective” were unfamiliar to them and we repeatedly had
          to translate them in Nepali.
        </P>

        <P>
          The next day, we began by working on the sentence structure. When we asked the class to
          identify the subject and object written on the board, they couldn't find the right answers yet but
          they were participating. We thought that the engagement meant we were getting somewhere.
          As they continued practising, the class began answering correctly. However when we wrote a
          similar sentence and asked an individual student to answer, he couldn't do it. The confidence we
          saw before disappeared. Some remained silent and others struggled to find the right answer.
          Sometimes, their classmates answered before they had the time to think for themselves. We
          tried making them work independently in their notebooks, but it was difficult to distinguish
          between what the students could do on their own versus what they could do with guidance.
        </P>

        <P>
          We kept trying to reach the students. We introduced more games, chocolates as rewards and
          tried to make the sentence formation interactive. These approaches definitely made the class
          more interactive, yet, when I looked at their homework and how they performed independently, I
          found myself questioning how much of the participation was translating into actual learning. As
          the days passed I became increasingly aware of how much we still didn't understand about
          each student's learning needs and how little we could accomplish in the time we had. We had
          only 1 week, limited knowledge about each students’ learning history and much bigger learning
          gaps than we had anticipated. This gave me an insight that I have much more to learn before I
          can claim about effective implementation.
        </P>

        <H>Resources Used</H>

        <ul className="mb-6" style={{ color: NAVY, lineHeight: 1.9 }}>
          {[
            "EFL Students’ Difficulties on Using Subject-Verb Agreement",
            "Subject-verb agreement as a key element of effective english reading and writing",
            "NYLearns - New York State’s curriculum management and standards-based system",
            "IXL third grade language arts skills",
            "Basic Level Curriculum English, CDC E-library",
            "Grade three English Textbook CDC",
            "Grade four English Textbook by CDC",
            "Grade five English textbook CDC",
          ].map(r => (
            <li key={r} className="text-[16px] sm:text-[17px]">{r}</li>
          ))}
        </ul>

      </article>

      {/* FOOTER */}
      <section className="py-12 px-6 text-center" style={{ background: NAVY, borderTop: `4px solid ${GOLD}` }}>
        <a href="/projects?section=case-study" onClick={goBack}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base"
          style={{ background: GOLD, color: NAVY, textDecoration: "none", boxShadow: "0 4px 20px rgba(221,168,83,0.30)", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#e8c070"; e.currentTarget.style.transform = "translateY(-2px)" }}
          onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = "" }}>
          <ArrowLeft size={16} /> Back to Team 2 Projects
        </a>
      </section>

    </main>
  )
}

export default KaskiCaseStudy