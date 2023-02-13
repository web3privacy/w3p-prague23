import yaml from 'js-yaml';

const CONFIG = yaml.load(`

title: Web3Privacy Prague 2023
shortname: "Web3Privacy Summit #1"
date: Monday, 5. June 2023
venue: X10, Prague
domain: prague.web3privacy.info
image: "/web3privacy.png"
logo: "/web3privacy-cropped.jpg"
twitter: web3privacy
parent: Web3Privacy Now
parentUrl: https://web3privacy.info
desc: June 5, 2023 - A lunarpunk conference focused on privacy in the Web3 industry as a complement to the Web3Privacy Now research.
authors: "💛 Collaboration of [Web3Privacy Now](https://web3privacy.info) & [ETHBrno](https://ethbrno.cz) team"
slogan: Diving into the culture of the Web3 privacy industry
aggregator: Prague Blockchain Week 2023
aggregatorUrl: http://prgblockweek.com/
sponsorUrl: https://matrix.to/#/@tree:gwei.cz
intro: |
  We need to protect our privacy, and that's why we're coming together on June 5 to Prague to sit down and discuss different aspects of privacy in the Web3 industry - how we can help shape it and make it more accessible - building a shared culture. The conference complements the research project [Web3Privacy Now](http://web3privacy.info/) and was created by joining forces with the production team of the privacy hackathon [ETHBrno](https://ethbrno.cz/).
themes:
- title: Human rights DAOs (pro-privacy)
- title: Identity (ID)
- title: Mixnets → Full-Stack Privacy
  desc: Imagine a Full-Stack Privacy -> how would it even look alike!
- title: Cryptography
- title: Tech journalists
  desc: Ethical crypto vs global cyberwars agenda
- title: Asian community
  desc: It's rare to see asians in Europe, but there are so many of them doing privacy solutions
- title: Privacy wars
  desc: Why are privacy-blockchain socials so toxic? We should stop hating each other & work together
- title: Privacy workforce
- title: "Privacy activist's"
- title: R&D (ZK, MPC)
- title: Network states (with a privacy focus)
  desc: The network state-as-a-grassroots movement
- title: Solarpunk vs Lunarpunk
  desc: For solarpunk to succeed it must integrate the lunarpunk unconscious. The only hope for solarpunk is to [go dark](https://www.egirlcapital.com/writings/107533289). Do you agree?
- title: Veksl
  desc: Easy onboarding to cryptocurrencies without KYC/AML using peer-to-peer tools is crucial for privacy. What options do we have today?
- title: Private messaging protocols
  desc: We need resilient privacy-preserving, p2p communication layers for Web3, that allows free and uncensored human-to-human, machine-to-machine or hybrid communication.
ticketsIntro: Be a part of the first Web3Privacy Summit experience…
ticketsNote: Tickets will go on sale in early March 2023.
tickets:
- title: All-day Access
  price: 2350 CZK (~99 EUR)
  includes:
  - All talks & panels
  - Coffee breaks
  - Buffet lunch
  - Networking drinks with speakers & attendees
  hint: |
    [Apply for a discount →](https://tally.so/r/mYPDJW)<br />(as independent developer, student, privacy advocate, open-source contributor..)
- title: "#Lunarpunk Party"
  price: 350 CZK (~15 EUR)
  includes:
  - 8pm - morning
  - Prague rave from top DJs
  - VJs and projections
  - Networking with attendees, speakers & sponsors
  note: "*Party access is included in the All-day Pass"
faq:
- title: Who is the event for?
  text: Our event is for anyone interested in privacy topics in the Web3 industry. There will be space for about 300 enthusiasts.
- title: Will the talks be livestreamed and/or recorded?
  text: Yes, we plan do both. Livestream of the whole conference and recordings of the lectures will be publicly available.
- title: When will tickets go on sale? What will be the payment options?
  text: Tickets will go on sale in early March 2023. Payment will be possible via credit card, Bitcoin (on-chain), Lightning Network or possibly other cryptocurrencies.
- title: All-day access ticket is expensive for me. Do you offer any discounts?
  text: Yes, we do! We offer discounts (up to 75%) for independent developers, students and especially active privacy advocates or open-source contributors to private protocols or tools. If you are interested in a discount, please fill out [this form](https://tally.so/r/mYPDJW).
- title: How do I get to the venue?
  text: Venue X10 (full name "[Divadlo X10](https://divadlox10.cz)") is located in the centre of Prague near the metro station *Národní Třída* (Line B) and *Můstek* (Line A,C). The address is [Charvátova 10/39, Prague 1, 110 00](https://goo.gl/maps/Yh8qWagnqB1DvK676) ([Google Maps](https://goo.gl/maps/Yh8qWagnqB1DvK676)).
people:
- id: mykola
  name: Mykola Siusko
  twitter: nicksvyaznoy
  img: mykola.png
- id: tree
  name: Tree
  twitter: treecz
  img: tree.jpeg
- id: juraj-bednar
  name: Juraj Bednar
  twitter: jurbed
  img: juraj-bednar.jpeg
- id: mario-havel
  name: Mario Havel
  twitter: TMIYChao
  img: mario-havel.jpeg
speakers:
- juraj-bednar
- mario-havel
hosts:
- mykola
- tree
program:
- time: 9:00 - 9:30
  title: Registration & networking
- time: 9:30 - 9:35
  title: Welcome to Web3Privacy
  speakers:
  - name: TBA
  desc: Welcoming visitors to our private-centric research, community and conference
- time: 9:35 - 10:55
  title: Talks I.
- time: 10:55 - 11:20
  title: 25min Coffee Break
- time: 11:25 - 12:40
  title: Talks II.
- time: 12:40 - 14:00
  title: Lunch & Networking
- time: 14:00 - 15:40
  title: Talks III.
- time: 15:40 - 16:05
  title: 25min Coffee Break
- time: 16:10 - 18:30
  title: Talks IV.
- time: 18:30 - 18:35
  title: Closing Remarks
  speakers:
  - name: TBA
- time: 18:30 - 20:00
  title: Networking & Drinks
- time: 20:00 - 4:00
  title: "#Lunarpunk party"
  desc: Enjoy our afterparty in Lunarpunk style with quality Prague rave DJs, which will take place in the same venue until the morning (4am).

`);

export default CONFIG;
