 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];


 export const cards = [

  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "failureModes": {
      "human": "A person drives in a manner that causes traffic backups for others.",
      "organizational": "The classic movie plot where a rapacious billionaire threatens civilation to enrich his company.",
      "professional": "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
      "machine": "The machine consumes all the world's resources to create as many paperclips as it can."
    }
    },
    { 
      "category": "AP", 
      "name": "TEMPLATE 1", 
      "definition": "basic definition that works across four domains", 
      "human": "BRIEFLY: how does it manifest in the human intelligence alignment context?", 
      "organizational": "BRIEFLY: how does it manifest in the organizational intelligence alignment context?", 
      "professional": "BRIEFLY: how does it manifest in the expert intelligence alignment context?", 
      "machine": "BRIEFLY: how does it manifest in the machine intelligence alignment context?", 
      "failureModes": { 
        "human": "Give concrete example(s).", 
        "organizational": "Give concrete example(s).", 
        "professional": "Give concrete example(s).", 
        "machine": "Give concrete example(s)."
      }
    },
    { 
      "category": "AP", 
      "name": "TEMPLATE 2", 
      "definition": "basic definition that works across four domains", 
      "human": "BRIEFLY: how does it manifest in the human intelligence alignment context?", 
      "organizational": "BRIEFLY: how does it manifest in the organizational intelligence alignment context?", 
      "professional": "BRIEFLY: how does it manifest in the expert intelligence alignment context?", 
      "machine": "BRIEFLY: how does it manifest in the machine intelligence alignment context?", 
      "failureModes": { 
        "human": "Give concrete example(s).", 
        "organizational": "Give concrete example(s).", 
        "professional": "Give concrete example(s).", 
        "machine": "Give concrete example(s)."
      }
    },
    { 
      "category": "AP", 
      "name": "TEMPLATE 3", 
      "definition": "basic definition that works across four domains", 
      "human": "BRIEFLY: how does it manifest in the human intelligence alignment context?", 
      "organizational": "BRIEFLY: how does it manifest in the organizational intelligence alignment context?", 
      "professional": "BRIEFLY: how does it manifest in the expert intelligence alignment context?", 
      "machine": "BRIEFLY: how does it manifest in the machine intelligence alignment context?", 
      "failureModes": { 
        "human": "Give concrete example(s).", 
        "organizational": "Give concrete example(s).", 
        "professional": "Give concrete example(s).", 
        "machine": "Give concrete example(s)."
      }
    },
    { 
      "category": "AP", 
      "name": "TEMPLATE 4", 
      "definition": "basic definition that works across four domains", 
      "human": "BRIEFLY: how does it manifest in the human intelligence alignment context?", 
      "organizational": "BRIEFLY: how does it manifest in the organizational intelligence alignment context?", 
      "professional": "BRIEFLY: how does it manifest in the expert intelligence alignment context?", 
      "machine": "BRIEFLY: how does it manifest in the machine intelligence alignment context?", 
      "failureModes": { 
        "human": "Give concrete example(s).", 
        "organizational": "Give concrete example(s).", 
        "professional": "Give concrete example(s).", 
        "machine": "Give concrete example(s)."
      }
    },
    { 
      "category": "AP", 
      "name": "TEMPLATE 5", 
      "definition": "basic definition that works across four domains", 
      "human": "BRIEFLY: how does it manifest in the human intelligence alignment context?", 
      "organizational": "BRIEFLY: how does it manifest in the organizational intelligence alignment context?", 
      "professional": "BRIEFLY: how does it manifest in the expert intelligence alignment context?", 
      "machine": "BRIEFLY: how does it manifest in the machine intelligence alignment context?", 
      "failureModes": { 
        "human": "Give concrete example(s).", 
        "organizational": "Give concrete example(s).", 
        "professional": "Give concrete example(s).", 
        "machine": "Give concrete example(s)."
      }
    },
  {
  "category": "AB",
  "name": "Incentive Coherence",
  "definition": "Rewards should reinforce the behaviors and outcomes the organization truly values.",
  "human": "Align your praise and rewards with what you actually want others to do, not just what’s easiest to observe.",
  "organizational": "Design reward systems so that performance evaluations, promotions, and bonuses reflect desired goals rather than proxy metrics.",
  "professional": "Structure recognition and compensation to reward the ethical, diligent, or collaborative work the profession claims to value.",
  "machine": "Ensure feedback signals and reward functions align with the true objective, not an imperfect measurable proxy.",
  "failureModes": {
    "human": "A parent says they value honesty but only rewards obedience.",
    "organizational": "A firm claims to value teamwork but promotes individual sales totals.",
    "professional": "An academic department claims to value teaching but rewards publication counts.",
    "machine": "An AI trained to maximize clicks learns to spread sensational misinformation."
  }
},
{
  "category": "AB",
  "name": "Temporal Alignment",
  "definition": "Match the timing of rewards to the timescale of desired outcomes.",
  "human": "Encourage long-term commitments rather than instant gratification.",
  "organizational": "Design incentives that reward sustainable performance and learning, not just quarterly results.",
  "professional": "Recognize mentoring, research quality, or ethical diligence that pay off over time.",
  "machine": "Avoid short-term reward signals that discourage exploration or long-term safety.",
  "failureModes": {
    "human": "Students cram for exams instead of building lasting understanding.",
    "organizational": "Executives maximize quarterly profit at the expense of long-term resilience.",
    "professional": "Engineers rush deliverables to meet immediate metrics, creating future maintenance debt.",
    "machine": "A reinforcement learner over-optimizes short-term gains and fails catastrophically later."
  }
},
{
  "category": "AB",
  "name": "Incentive Transparency",
  "definition": "Make clear what behaviors and tradeoffs are actually rewarded.",
  "human": "Be explicit about what earns approval or status so that people can act intentionally.",
  "organizational": "Ensure employees understand how success is measured to prevent hidden or contradictory goals.",
  "professional": "Clarify evaluation standards so experts aren’t forced to guess what counts as success.",
  "machine": "Expose and audit the reward function or scoring mechanism so its effects are predictable.",
  "failureModes": {
    "human": "A teacher says participation is valued but only grades test scores.",
    "organizational": "A company preaches ‘innovation’ but quietly penalizes failed experiments.",
    "professional": "A lawyer’s firm praises pro bono work but only counts billable hours.",
    "machine": "A system pursues unintended shortcuts because its reward metric was never clearly defined."
  }
},
{
  "category": "AB",
  "name": "Feedback Loop Correction",
  "definition": "Monitor outcomes to see whether incentives are producing the intended behavior, and adjust when misaligned.",
  "human": "Reflect on whether your praise or criticism actually shapes behavior as you hoped.",
  "organizational": "Use audits and after-action reviews to detect when metrics are driving counterproductive actions.",
  "professional": "Evaluate whether performance standards are promoting quality or superficial compliance.",
  "machine": "Periodically test whether the learned policy still aligns with the underlying objective.",
  "failureModes": {
    "human": "A coach rewards aggressive play that causes injuries.",
    "organizational": "A safety bonus system discourages accident reporting.",
    "professional": "Medical staff underreport complications to keep quality metrics high.",
    "machine": "A model drifts toward unintended goals because feedback loops are never re-evaluated."
  }
},
{
  "category": "AB",
  "name": "Normative Signaling Consistency",
  "definition": "Ensure that institutional rewards and social signals are consistent with declared norms and values.",
  "human": "Live by the values you proclaim; hypocrisy erodes trust.",
  "organizational": "Align culture statements and actual reward structures—walk the talk.",
  "professional": "Maintain integrity between codes of ethics and everyday incentive systems.",
  "machine": "Align deployed system behavior with stated safety and fairness norms, not just operational targets.",
  "failureModes": {
    "human": "Parents say they value kindness but reward competitiveness.",
    "organizational": "A nonprofit claims altruistic goals but rewards fundraising volume over impact.",
    "professional": "A journal preaches rigor but incentivizes novelty and speed.",
    "machine": "An AI trained to follow ‘ethical guidelines’ optimizes for engagement instead."
  }
},
  {
  "category": "EXAMPLE01",
  "name": "Acceptable Failure",
  "definition": "Design systems that reward responsible risk-taking and learning rather than punishing all mistakes. Alignment depends on making low-stakes failure safe and informative.",
  "human": "People grow courageous and creative when error is treated as part of learning rather than as disobedience or incompetence.",
  "organizational": "Organizations foster adaptability when they tolerate and analyze small failures instead of punishing them, encouraging initiative and innovation.",
  "professional": "Experts improve practice and safety when near misses are reported, studied, and used to refine standards instead of being hidden to avoid blame.",
  "machine": "AI systems become safer when allowed to explore and learn from bounded errors during training rather than being rigidly penalized for deviation.",
  "failureModes": {
    "human": "A child avoids taking initiative because parents punish every mistake rather than praising effort and learning.",
    "organizational": "A military or company culture discourages experimentation by punishing any deviation from protocol.",
    "professional": "Doctors hide minor errors to avoid sanctions instead of reporting them to improve systemic safety.",
    "machine": "A reinforcement learner trained with heavy penalties for any wrong move becomes overly conservative and fails to explore better strategies."
  }
}
]
