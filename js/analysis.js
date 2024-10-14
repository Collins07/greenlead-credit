function selectReference(reference) {
    document.querySelector('.dropdown-toggle').innerText = reference;
}

function generateReport() {
    var selectedReference = document.querySelector('.dropdown-toggle').innerText.trim();
    var userInput = document.getElementById('inputText').value.toLowerCase().trim();
    var outputElement = document.getElementById('output');
    var response = '';

    // Check if no reference document is selected and user input contains "greenlead"
    if (userInput.includes('greenlead')) {
        if (!selectedReference || selectedReference === 'Reference Document') {
            response = `
            <br>
            <h3>Environmental Performance:</h3>
            <strong>1. Energy Consumption Trends:</strong>
            <br><br>
            <ul>
                <li>Report 1 (2019): Total energy consumed: 15,000 MWh, Renewable energy: 60%</li>
                
                <li>Report 2 (2020): Total energy consumed: 16,500 MWh, Renewable energy: 75%</li>
                <li>Report 3 (2021): Total energy consumed: 14,200 MWh, Renewable energy: 70%</li>
                <li>Report 4 (2022): Total energy consumed: 13,800 MWh, Renewable energy: 85%</li>
            </ul>
            <br>
            <img src="../img/repo.jpg" alt="Report 1 Image" width="300">
            <br>
            <b>Analysis:</b> There is a consistent decrease in total energy consumption over the years, coupled with an increasing percentage of 
            renewable energy usage, indicating a positive trend towards sustainability.
            <br><br>

            <strong>2. Emissions Reduction:</strong>
            <br><br>
            <ul>
                <li>Report 1: Scope 1 emissions: 5,000 metric tonnes CO2, Scope 2 emissions: 3,000 metric tonnes CO2</li>
                <img src="../img/analyze.jpg" alt="Report 1 Image" width="300">
                <li>Report 2: Scope 1 emissions: 4,500 metric tonnes CO2, Scope 2 emissions: 2,800 metric tonnes CO2</li>
                <img src="../img/analyze (3).jpg" alt="Report 1 Image" width="300">
                <li>Report 3: Scope 1 emissions: 4,000 metric tonnes CO2, Scope 2 emissions: 2,600 metric tonnes CO2</li>
                <img src="../img/analyze (2).jpg" alt="Report 1 Image" width="300">
                <li>Report 4: Scope 1 emissions: 3,800 metric tonnes CO2, Scope 2 emissions: 2,300 metric tonnes CO2</li>
                <img src="../img/analyze (1).jpg" alt="Report 1 Image" width="300">
            </ul>
            <br>
            <b>Analysis:</b> There is a consistent downward trend in both Scope 1 and Scope 2 emissions, 
            indicating successful emission reduction initiatives over the years.
            <br><br>
            <h3>Social Performance:</h3>
            <br>
            
            <b>Analysis:</b> The company's community engagement efforts have evolved from general awareness initiatives to targeted
             projects and training programs, indicating a deepening commitment to social responsibility. <br>
             <img src="../img/comm.jpg" alt="Report 1 Image" width="300">
             <img src="../img/comm1.jpg" alt="Report 1 Image" width="300">

             <br><br>
            <h3>Governance:</h3>
            <br>

            <b>Analysis:</b> There is a continuous effort to improve environmental policy compliance, 
            with a focus on aligning with industry standards and enhancing transparency as reported in all of the 4 reports with 
            the 2021 report showing strengthened board oversight on environmental policies.

            <br><br>

            `;
        } else {
            // Check if the selected reference is "GRI standards" and user input contains "greenlead"
            if (selectedReference === 'GRI standards' && (userInput.includes('greenlead') || userInput.includes('greenlead africa'))) {
                response = `
                <br><br>
                <h3>GRI Reporting Framework Analysis:</h3>
                <br>
                <p>Analyzing the latest GreenLead ESG report against the GRI (Global Reporting Initiative) framework
                and requirements provides valuable insights into the company's sustainability performance and 
                adherence to international standards. Here's the analysis: 
                </p>
                
                <br><br>
                <strong>Reporting Period:</strong> January 1, 2021 - December 31, 2021
                <br><br>
                <strong>1. Material Aspects Coverage:</strong>
                <ul>
                    <li>The latest report comprehensively covers key material aspects outlined in the GRI framework, including energy consumption, emissions, water management, and social initiatives.</li>
                </ul>
                <strong>2. Stakeholder Engagement:</strong>
                <ul>
                    <li>Governance structures and processes related to sustainability are clearly outlined, showcasing the company's commitment to sustainability at the highest levels of management.</li>
                </ul>
                <strong>3. Sustainability Governance </strong>
                <ul>
                    <li>Governance structures and processes related to sustainability are clearly outlined, showcasing the company's commitment to sustainability at the highest levels of management.</li>
                </ul>
                <strong>4. Environmental Performance Metrics:</strong>
                <ul>
                    <li>The report provides detailed metrics on environmental performance, such as energy consumption, emissions reduction, and water management, aligned with GRI standards.</li>
                </ul>
                <strong>5. Social Responsibility Initiatives:</strong>
                <ul>
                    <li>Social responsibility initiatives, including community engagement programs and support for climate-smart agriculture, align with GRI guidelines on social performance.</li>
                </ul>

                <br><br>
                <h3>Report Completeness:</h3>
                <p>The report achieves a high level of completeness, scoring <b>95%</b> against GRI reporting standards. This underscores GreenLead's dedication to transparency and accountability, 
                providing stakeholders with a comprehensive overview of its sustainability performance.</p>
                
                `;
            }
            // Check if the selected reference is "Kenya’s National Climate Change Action Plan" and user input contains "greenlead"
            else if (selectedReference === "Kenya’s National Climate Change Action Plan" && (userInput.includes('greenlead') || userInput.includes('greenlead africa'))) {
                response = `
                <strong>Founders Factory Africa Sustainability Report - Kenya Climate Action Plan Compliance</strong>
                <br><br>
                <strong>Reporting Period:</strong> January 1, 2023 - December 31, 2023
                <br><br>
                <strong>1. Overview:</strong>
                <ul>
                    <li>Founders Factory Africa is committed to aligning its operations with Kenya's National Climate Change Action Plan, contributing to the country's climate resilience and sustainable development goals.</li>
                </ul>
                <strong>2. Kenya Climate Action Plan Compliance:</strong>
                <br>
                <strong>a.  Renewable Energy Adoption:</strong>
                <ul>
                    <li>Percentage of energy sourced from renewables: 25%.</li>
                    <li>Collaborative efforts with local providers for increased renewable energy adoption.</li>
                </ul>
                <strong>b. Carbon Emission Reduction:</strong>
                <ul>
                    <li>Implemented initiatives resulting in a 10% reduction in carbon emissions.</li>
                    <li>Contributed to local reforestation projects to offset emissions.</li>
                </ul>
                <strong>c. Adaptation Strategies:</strong>
                <ul>
                    <li>Conducted vulnerability assessments to identify climate risks.</li>
                    <li>Implemented adaptive measures to enhance resilience in operations.</li>
                </ul>
                <strong>3. Collaboration with Local Communities:</strong>
                <br>
                <strong>a. Community Engagement Programs:</strong>
                <ul>
                    <li>Participated in community initiatives addressing climate change awareness.</li>
                    <li>Sponsored local projects focusing on sustainable agriculture and conservation.</li>
                </ul>
                <strong>b. Support for Climate-Smart Agriculture:</strong>
                <ul>
                    <li>Collaborated with local farmers to promote climate-smart agricultural practices.</li>
                    <li>Training programs on sustainable farming techniques.</li>
                </ul>
                `;
            }
        }
    }


    // Create a temporary element to parse and render HTML
    var tempElement = document.createElement('div');
    tempElement.innerHTML = response;

    // Function to simulate typing effect
    function typeEffect() {
        outputElement.innerHTML = ''; // Clear the output element
        var i = 0;
        var interval = setInterval(function () {
            if (i < tempElement.childNodes.length) {
                outputElement.appendChild(tempElement.childNodes[i].cloneNode(true));
                i++;
            } else {
                clearInterval(interval); // Stop the interval once all nodes are appended
            }
        }, 250); // Adjust the interval for typing speed
    }

    typeEffect(); // Call
}