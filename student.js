
 export const categories = [

  {
    "code": "AB", 
    "name": "", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": ""
  }
];


 export const cards = [

    { 
      "category": "AB", 
      "name": "Military",
      "hopedFor": "Soliders who will obey orders at any personal cost to themselves up to and including death.",
      "rewarded": "Bailing, mutiny, killing commanding officers", 
      "pathology": "Misaligned incentives: unlike WWII, soldiers get to go home when their tour of duty is over, instead of when the war is won", 
      "reversedPathology": "Soldiers get to leave in a way that's proportional to their performance, or that's tethered to the war ending.",
      "human": "Secondary school students get assignments based on how well they're performing (?)",
      "organizational": "(done)", 
      "professional": "Doctors are paid based on the success of their interventions.", 
      "machine": "AI gets a reward only when the task is complete."
      "failureModes": { 
        "human": "High-performing students are never challenged and end up doing very little work.", 
        "organizational": "(if that's the only principle) Soldiers commit ethical atrocities in order to accelerate the war end.", 
        "professional": "Doctors only take on patients who are likely to result in a successful intervention, i.e. they don't try to intervene in cases where the patient is e.g. more ill.", 
        "machine": "The AI completes a task and gets a reward and then decides not to do anything else that might still be helpful."
      }
    },
    { 
      "category": "AB", 
      "name": "Universities",
      "hopedFor": "Genuine knowledge transfer from professor to student",
      "rewarded": "Getting good grades", 
      "pathology": "Extrinsically rewarding advancement (?) of a proxy metric instead of the actual thing (Goodhart's law)", 
      "reversedPathology": "Designing a system that rewards long-term retention and genuine learning, e.g. spaced exams over the entirety of one's university career",
      "human": "Gauging the quality of a GitHub profile by the code itself instead of the number of commits",
      "organizational": "(done)", 
      "professional": "Gauging a doctor's performance based on differential quality of life improvements (hard to measure) over number of successful treatments or number of dollars brought in (?)",
      "machine": "Rewarding a suite of measurable proxy metrics over just a single one"
      "failureModes": { 
        "human": "Hard to gauge quality of code in a numerical way that's comparable to other codebases", 
        "organizational": "Metrics created to measure long-term retention and genuine learning themselves become targets",
        "professional": "(likewise)", 
        "machine": "It's possible to game one proxy metric in a way that nullifies the strategy of using a suite of metrics"
      }
    },
    { 
      "category": "AB", 
      "name": "Sports",
      "hopedFor": "Team members would be cooperative and aim for team victories over trying to score goals themselves",
      "rewarded": "Individual performance, sports scoring statistics.", 
      "pathology": "Team members are incentivized to inflate their own statistics instead of being team players.", 
      "reversedPathology": "Team members are rewarded for being team players and contributing to the success of their team.",
      "human": "Members of an easter egg hunt are rewarded for pointing out eggs to their team members",
      "organizational": "Performance reviews include metrics which gauge how much someone's contributions made others more successful.", 
      "professional": "Legal experts are incentivized to contribute to a firm's success instead of chasing individual cases won.", 
      "machine": "An AI in a multi-agent swarm is rewarded for the success of the group."
      "failureModes": { 
        "human": "The metrics used to judge whether someone is being a team player get gamed, and no one wants to pick up eggs since they can just keep pointing them out to teammates", 
        "organizational": "(as above)",
        "professional": "Legal experts pursue individual case wins anyway because the incentives outside of the firm are too strong.", 
        "machine": "The AI doesn't learn to contribute to the success of the group since it was trained with other swarm members that were scoring on their own."
      }
    }
]
