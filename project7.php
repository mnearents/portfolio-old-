  
          
       <div class="content no-bg">
           
            <div class="section project-summary"><div id="summary-wrapper"><!--<h1>Summary</h1>
               <p>Virtual Envelopes was an app idea that I had because I was frustrated with online banking solutions. There's just not a product out there that allows me to customize my bank account the way I want, thus Virtual Envelopes was born.</p>-->
                
                <div class="scroll-down-indicator fa fa-angle-down" title="Scroll down to first section"></div>
                
               </div>
           </div>
           
           <div id="summary" class="project-content">
            <div class="container">
                <h1>Summary</h1>
                <p>Virtual Envelopes was an app idea that I had because I was frustrated with online/mobile banking solutions. There's just not a product out there that allows me to customize my bank account the way I want; thus, Virtual Envelopes was born.</p>
               </div>
           </div>
           
           
            <div id="project-ux" class="project-content">
                <div class="container">
                <h1>User Experience</h1>

<h2 class="headline">PROBLEM</h2>
                    <p>I am not a financial whiz. I have one checking and one savings account with a debit card. My online banking solution is ugly, cluttered, confusing, and ultimately not helpful. It took me a year to notice a recurring fee from a free trial account I had signed up for. And when I want to save up for a new computer or TV, there's no way to keep track of that money when it is mixed in with other money. There are solutions available: Mint, Mvelopes, etc. But I wanted something simpler and more customizable.<br><br>
                        
                    Take Mvelopes for example. This app actually includes the functionality I wanted in my app - create virtual envelopes and allocate your money into them. In this way one can create "funds" for different purposes. I've tried using Mvelopes four times now and have given up both times. As a UX designer, I think they made every wrong design decision they could. I currently have 180 some odd transactions that I have to allocate to envelopes. They also force your envelopes to balance with a budget. I don't want a budget, I just want to see my money categorized.</p>
                    
                    <h2 class="headline">SOLUTION</h2>
                    <p>Allow the user to create envlopes or funds. Money can be transferred in and out and transactions can be allocated or not. Say I have a checking from which I pay bills, groceries, gas, etc. If I want to save up for something (a new computer), I can create a computer fund. If I get $100 for Christmas, I can put that $100 into the computer fund without worrying that it will get lost in the mix and spent towards bills. And I'll never forget how much I have saved up for that computer.</p>

                    
</div><!-- end container -->
           </div>
           
           <div id="project-vd" class="project-content height0">
              
          
           </div>
           
           <div id="project-dev" class="project-content">
               <div class="container">
                <h1>Development</h1>
                
                   <p>I developed a prototype Android app for my own personal use. It was a native app that ran on my phone via developer mode. The app would send an SMS to my text banking service, intercept the return text, and parse the balance and transaction info (SMS was a temporary solution - banking APIs charge a minimum of $1000/month for API access). The app then converted the parsed transactions into a list.<br><br>
                       
                       The app allowed me to create envelopes. When I created an envelope, I could drag and drop each transaction to the appropriate envelope, or leave them in the general account. If the transaction was a debit, then money would be taken from the envelope; if a credit, money would be added.<br><br>
                   
                   The app allowed me to transfer money between envelopes in order to allocate money toward a fund. Transfers were then converted into a transaction and placed in the list of transactions. I loved the app, and I still tell my wife how badly we need something like this, but the SMS parsing was buggy and could not account for future changes to the SMS message.<br><br>
                       
                       I ultimately abandoned the project, to be continued at a more convenient time in my life. I am attending <a href="www.protohack.org" title="More info about Protohack">Protohack</a> in New York City on June 13 to prototype and present this idea during a non-coding hackathon.
                   </p>
                   
                 
             
               
               </div> <!-- end container -->
           </div>
           
          
           
<!--
            <div id="project-ux" class="project-content col-md-4">
                <div class="project-content-inner">
                <h1>User Experience</h1>
                    
                    
                    
                    
                    
                    
                    </div>
           </div>
           
           <div id="project-vd" class="project-content col-md-4">
               <div class="project-content-inner">
                <h1>Visual Design</h1>
                   </div>
           </div>
           
           <div id="project-dev" class="project-content col-md-4">
               <div class="project-content-inner">
                <h1>Development</h1>
                   </div>
           </div>
-->
           
           <div id="project-footer" class="project-content">
               <?php include $_SERVER['DOCUMENT_ROOT'] . '/portfolio/modules/project-footer.php' ?>
               
               
               </div>
           
        </div>
          </div>