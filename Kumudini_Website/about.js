document.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.getElementById('about-btn');
    const whoWeAreBtn = document.getElementById('who-we-are-btn');
    const whatWeDoBtn = document.getElementById('what-we-do-btn');
    const aboutContent = document.getElementById('about-content');

    // Content for "Who We Are" with an image
    const whoWeAreContent = `
        <h2>Who We Are</h2>
        <img src="kumudini_team.jpg" alt="Kumudini Team" style="width: 800px; max-width: 100%; height: auto; margin: 20px auto; display: block; border-radius: 5px;">
        <p>In Nepal, forty-two percent of the population is under the eighteen years of age and out of which almost half comprise of girls and a majority of them live in rural areas. The Constitution of Nepal (2015) and the international legal instruments which Nepal has ratified such as CRC (Convention on the Rights of the Child) and CEDAW (Convention on the Elimination of all forms of Discrimination against Women) provide equal rights to all girls, irrespective of caste, religion and gender. But, reality is different. Discrimination between boys and girls start even before birth—some of the girls are not even welcomed into this world. The ones who make it have high chances of being discriminated and deprived of their fundamental rights. Growing up in a patriarchal society often times nip them while they are still buds curtailing their opportunities to blossom to their full potential. In absence of protection mechanism, girls are abused, harassed, exploited and neglected compelling them to live a life of fear.</p>
        <p>“Kumudini” meaning “white night lotus” blossoms during darkness personifying beauty and dignity. We believe that every girl child, particularly the ones subjected to abuse and exploitation, can excel and live a life without fear with strength and dignity by being empowered.</p>
        <h3>Vision</h3>
        <p>We envision a society in which every girl child lives a protected life with her rights to survival, development, and participation ensured.</p>
        <h3>Goal</h3>
        <p>To enable a society where every girl child is respected, protected, and grows fully to participate in decisions that affect her life.</p>
        <h3>Mission</h3>
        <p>Kumudini will extend support and protection in particular to victims and vulnerable child, not restricting to women in need, without any discrimination and walk with her to prepare her to achieve the dream that she aspires with confidence and strength.</p>
        <h2>Our Team</h2>
        <h3>Pooja Mahato - Chairperson</h3>
        <p>Pooja Mahato has an extensive experience of working with trafficking survivors and abused girls/women. She has been in this field for the last twenty-four years. She believes that only actions can make a real difference than just words. She is a born fighter.</p>
        <h3>Shilpa Dan Lepcha - Vice President</h3>
        <p>Shilpa Lepcha Lama has an experience of working in child protection and program management for more than twelve years. She believes that since children are the country's future it a privilege to work for them and shape the country's future through Kumudini.</p>
        <h3>Muna Basnyat - Secretary</h3>
        <p>Muna Basnyat, a development professional, has national and regional experience of working in child protection and anti-trafficking. She believes that it is important to ensure quality in every action we do such that it has a lasting effect.</p>
        <h3>Eva Gorkhali - Treasurer</h3>
        <p>Eva Gorkhali Shrestha has an extensive experience in financial management and administration for more than 9 years. She believes that if we provide equal opportunities and education to girls/women, they can be self-independent and can get success in their life.</p>
        <h3>Anuradha Acharya - Board Member</h3>
        <p>Anuradha Acharya, a mental health professional, has an experience of working with trauma survivors for seven years. She believes that education is the key to empower girls/women and equip them with knowledge and skills to lead a life with confidence and self-reliance.</p>
        <h3>Smriti Khadka - Board Member</h3>
        <p>Smriti Khadka has intensive experience on individual care of the children and women, who are trafficking survivors and who are abused girls/women. She is trained medical person with great experience on project management.</p>
        <h3>Pradip Dangol - Board Member</h3>
        <p>He is Child Right Specialist and has intensive experience working on child protection for 18 years. He is president of NGO Federation, Kathmandu and coordinator of loose forum of organizations working on child protection.</p>
    `;

    // Content for "What We Do"
    const whatWeDoContent = `
        <h2>What We Do</h2>
        <p>Kumudini is set up by a team of experts with extensive experience in working with abused, exploited and trafficked children. Kumudini is a collective initiative of the group to complement each other’s knowledge and skills to provide quality of care and protection to the victims of abuse and exploitation and at the same time work with vulnerable groups to prevent abuse and exploitation. The executive members consist of a trafficking survivor, psychosocial counselor, case manager, child protection specialist, anti-trafficking specialist, medical professional and a finance administrator.</p>
        <h3>Objectives</h3>
        <p>The main objective of the organisation is to create a protective environment for girl children, who are victims of abuse and exploitation, vulnerable girl children, and women in need such that they develop to their full potential and live a life without fear and with dignity.</p>
        <p>The following are the objectives set by the organization to achieve its goal:</p>
        <h4>Objective 1: To provide space and services to victims and vulnerable girl children, including women in need, for their protection and well-being</h4>
        <p>Run a short term receiving facility (shelter home) for girl children and women in need, particularly subjected to abuse and exploitation, with all essential services such as shelter, food, medical aid, legal aid, education psychosocial counseling and self empowerment training.</p>
        <p>Maintain strong networking with different organisations that provide specialized care through a national mechanism for referral.</p>
        <p>Provide legal aid to the victims of abuse, exploitation and trafficking with legal aid and help them access justice by preparing them through psychosocial counseling and availing information on relevant legal processes.</p>
        <h4>Objective 2: To work with vulnerable girl children and women in need for their economic and social development and provide mental and psychosocial care for their well-being</h4>
        <p>Provide training on empowerment and self protection to vulnerable girl children.</p>
        <p>Work with the girl children to explore opportunities for their economic empowerment.</p>
        <p>Address the needs of vulnerable girl children’s psychosocial and mental health by providing services such as psychosocial counseling, art therapy, PTSD etc.</p>
        <h4>Objective 3: To function as a resource to other organizations in installing and practicing a systematic way of managing and handling cases</h4>
        <p>Coordinate and liaise with other organizations working in similar areas.</p>
        <p>Provide training on case management, personal development, self protection, interviewing techniques etc. to other organizations upon request.</p>
        <h4>Objective 4: To work with schools and communities on prevention of abuse and exploitation</h4>
        <p>Conduct programs to create awareness on prevention of abuse and exploitation at school-level and give training on self-protection to school-going girls.</p>
        <h4>Objective 5: To provide a safe passage to abused and trafficked children by ensuring safe and protected repatriation process</h4>
        <p>Coordinate with different organizations in India and government in Nepal to give safe passage for the girls who are victims of abuse and exploitation on the premise of trafficking.</p>
        <h4>Objective 6: To ensure successful reintegration of abused and trafficked girl children in the community with regular follow and to work with families by providing economic option for livelihood so the girl children remain safe and pursue their education</h4>
        <p>Conduct risk-assessments to explore the possibilities of reintegrating children back to the family and communities.</p>
        <p>Provide seed grants to the families for their livelihood.</p>
        <p>Support girl child for their education such that they stay with their families and pursue their education.</p>
        <h4>Objective 7: To conduct action-oriented research to design effective programmatic interventions for the safety and protection of girl children</h4>
        <p>Coordinate with different national and international institutions to explore and identify issues requiring research.</p>
        <p>Conduct action oriented research on issues related to safety and protection of girl children.</p>
        <p>Design effective interventions based on the findings of the research.</p>
        <h4>Objective 8: To work with the government in strengthening child protection system such that the children are safe and protected</h4>
        <p>Coordinate with government bodies for the protection of the girl child who are victims of abuse and exploitation.</p>
        <p>Sensitize government officials to be more sensitive in handling cases of abuse and exploitation by providing them with training on interviewing and interacting with abused and exploited children.</p>
        <h3>What We Aim To Do</h3>
        <h4>Support System</h4>
        <p>Run a short term receiving facility (shelter home) for girl children and women in need, particularly subjected to abuse and exploitation, with all essential services such as shelter, food, medical aid, legal aid, education psychosocial counseling and self empowerment training.</p>
        <p>Maintain strong networking with different organisations that provide specialized care through a national mechanism for referral.</p>
        <h4>Mental Health</h4>
        <p>Address the needs of vulnerable girl children’s psychosocial and mental health by providing services such as psychosocial counseling, art therapy, PTSD etc.</p>
        <p>Coordinate and liaise with other organizations working in a similar area.</p>
        <p>Provide training on case management, personal development, self protection, interviewing techniques etc. to other organizations upon request.</p>
        <h4>Social and Economic Empowerment</h4>
        <p>Provide training on empowerment and self protection to vulnerable girl children.</p>
        <p>Work with the girl children to explore opportunities for their economic empowerment.</p>
        <h4>Prevention through Education and Training</h4>
        <p>Conduct programs to create awareness on prevention of abuse and exploitation at school-level and give training on self-protection to school-going girls.</p>
        <h4>Support through Libraries</h4>
        <p>[Content about libraries can be added here if applicable]</p>
        <h4>Safe and Voluntary Repatriation</h4>
        <p>Coordinate with different organizations in India to give safe passage for the girls who are victims of abuse and exploitation on the premise of trafficking.</p>
        <h4>Justice</h4>
        <p>Provide legal aid to the victims of abuse, exploitation and trafficking with legal aid and help them access justice by preparing them through psychosocial counseling and availing them information on the legislation and the legal process.</p>
        <h4>Reintegration</h4>
        <p>Conduct risk-assessment to explore the possibilities of reintegrating children back to the family and communities.</p>
        <p>Provide seed grants to the families for their livelihood.</p>
        <p>Support girl child for their education such that they stay with their families and pursue their education.</p>
        <h4>Action Oriented Research</h4>
        <p>Coordinate with different national and international institutions to explore and identify issues requiring research.</p>
        <p>Design effective interventions based on the findings of the research.</p>
        <h4>Coordination with the Government</h4>
        <p>Coordinate with the government bodies for the protection of the girl child who are victims of abuse and exploitation.</p>
        <p>Sensitize the government officials to be more sensitive in handling cases of abuse and exploitation by providing them training on interviewing abused and exploited children.</p>
    `;

    // Set "Who We Are" as default content based on URL hash
    if (window.location.hash === '#what-we-do') {
        aboutContent.innerHTML = whatWeDoContent;
    } else {
        aboutContent.innerHTML = whoWeAreContent;
    }

    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        aboutContent.innerHTML = whoWeAreContent;
    });

    whoWeAreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        aboutContent.innerHTML = whoWeAreContent;
    });

    whatWeDoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        aboutContent.innerHTML = whatWeDoContent;
    });
});