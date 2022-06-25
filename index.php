<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // Asign Variables

    // Note: We Use Filter_Var Just To Make Filter On The Value (Option)
    $UserName = filter_var($_POST["UserName"], FILTER_SANITIZE_STRING);
    $Email = filter_var($_POST['Email'], FILTER_SANITIZE_EMAIL);
    $Phone = filter_var($_POST['Phone'], FILTER_SANITIZE_NUMBER_INT);
    $Message = filter_var($_POST['Message'], FILTER_SANITIZE_STRING);

    // Check If Define Error
    $FormErrors = array();
    if (strlen($UserName) < 5) {
        $FormErrors[] = "UserName Must Be Atleast More Than <b>5</b> Characters";
    }
    if (strlen($Message) >= 250) {
        $FormErrors[] = "Message Must Be Atleast More Than <b>250</b> Characters";
    }

    // If No Errors Was Defined Send The Main
    $To = "shehabayman365@gmail.com";
    $Subject = "This Message Sent From Your Own Website";
    $Header = "From: " . $Email . "\r\n";
    if (empty($FormErrors)) {
        mail($To, $Subject, $Message, $Header);
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Title Of The Page -->
    <title>My Portfolio</title>
    <link rel="icon" type="image/x-icon" href="./images/logo.png" />
    <!-- AOS Library -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <!-- Import FontAwasome Link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    <!-- Import Css File -->
    <link rel="stylesheet" href="./css/style.css" />
</head>

<body>
    <!-- =================================== Header ========================================= -->
    <header>
        <a href="#" class="logo">
            <img src="./images/logo.png" data-aos="zoom-in-left" data-aos-delay="150" />
            <h2 data-aos="zoom-in-left" data-aos-delay="250"><span>ٍShehab </span> Ayman.</h2>
        </a>
        <nav>
            <a href="#Home" data-aos="zoom-in-left" data-aos-delay="350">Home</a>
            <a href="#About" data-aos="zoom-in-left" data-aos-delay="450">About</a>
            <a href="#Services" data-aos="zoom-in-left" data-aos-delay="550">Services</a>
            <a href="#Skills" data-aos="zoom-in-left" data-aos-delay="650">Skills</a>
            <a href="#Portfolio" data-aos="zoom-in-left" data-aos-delay="750">My-Work</a>
            <a href="#Contact" data-aos="zoom-in-left" data-aos-delay="850">Contect</a>
        </nav>
        <i class="fa fa-bars" data-aos="zoom-in-left" data-aos-delay="950"></i>
    </header>

    <!-- ==================================== Home ========================================== -->
    <section class="Home" id="Home">
        <div class="Content">
            <h3 data-aos="fade-down" data-aos-delay="1050">Welcome To My Page, My Name Is</h3>
            <h1 data-aos="fade-right" data-aos-delay="1250">Shehab Ayman</h1>
            <h4 data-aos="fade-right" data-aos-delay="1350">And I'm a | <span class="Auto1"></span></h4>
            <a href="#Portfolio" class="Style" data-aos="fade-up" data-aos-delay="1450">View My Work</a>
        </div>
    </section>

    <!-- ==================================== About ========================================= -->
    <section class="About" id="About">
        <div class="title2" data-aos="fade-up" data-aos-delay="150">
            <h1>About Me</h1>
            <span>Who I Am</span>
        </div>
        <div class="Catagory">
            <div class="left">
                <img src="./images/About.jpg" data-aos="fade-right" data-aos-delay="150" />
            </div>
            <div class="right">
                <div class="Content">
                    <h2 data-aos="fade-down" data-aos-delay="350">
                        My Name Is Shehab Ayman, And I'm A <br />
                        | <span class="Auto2"></span>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="450" data-offset="0">
                        I am a Front-end developer, I'm here to offer my services as aprofessional web
                        developer with more than 3 years of experience. I got fairly extensive knowledge in the
                        frontend, I can work with PSD as well as with templates and realize any functionality with your
                        website. I have experience with high-loaded projects.
                        Skills
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================================== Services ====================================== -->
    <section class="Services" id="Services">
        <div class="title" data-aos="fade-up" data-aos-delay="150">
            <h1>My Services</h1>
            <span>What I Provide</span>
        </div>
        <div class="Catagory" data-aos="fade-up">
            <div class="box" data-aos="fade-down" data-aos-delay="250">
                <i class="fa fa-paint-brush"></i>
                <h2>Web Design</h2>
                <p>I specialize in creating pixel perfect responsive websites on all devices.</p>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="550">
                <i class="fas fa-chart-line"></i>
                <h2>E-Commerce</h2>
                <p>I make designs and websites from small startups to large companies. I'm always aware of modern trends
                    of design and programming. I can assure you high quality of my work & satisfaction over time.</p>
            </div>
            <div class="box" data-aos="fade-down" data-aos-delay="250">
                <i class="fas fa-code"></i>
                <h2>Web Developer</h2>
                <p>I can work on any website from scratch to the end of the project with a responsive design On all
                    devices [Mobile, Ipad, Labtop, PC] in a very fast and standard time </p>
            </div>
        </div>
    </section>

    <!-- ==================================== Skills ======================================== -->
    <section class="Skills" id="Skills">
        <div class="title2" data-aos="fade-up" data-aos-delay="150">
            <h1>My Skills</h1>
            <span>What I Know</span>
        </div>
        <div class="Catagory">
            <div class="left">
                <h1 data-aos="fade-right" data-aos-delay="250">
                    My Creative Skills & Experiences <br />|
                    <span class="Auto3"></span>
                </h1>
                <p data-aos="fade-right" data-aos-delay="350">
                    Design, build and maintain websites using the appropriate coding and scripting languages, content
                    management tools, and other related software applications Write, design, or edit
                    web page content, perform website updates as needed and write code for websites or web
                    applications Work with management, development, information technology, marketing, product
                    development, and other stakeholders to prioritize project needs, develop content, select solutions,
                    and resolve conflicts Ensure the code is valid, properly structured, and compatible with multiple
                    browsers, mobile devices, and operating systems.
                </p>
                <span class="MoreBTN" data-aos="fade-right" data-aos-delay="450">Read More</span>
                <p class="More-Paragraph More" data-aos="fade-right" data-aos-delay="350">
                    Identify issues discovered by testing and feedback from internal and external clients,
                    and correct problems or refer them to the appropriate teams for resolution
                    Collaborate with teams on website plans, such as budgets, performance requirements, equipment, or
                    legal issues, including privacy and accessibility
                    Document style guidelines for website content and implement procedures for ongoing website revision
                    and maintenance
                    Communicate with information technology or network staff and any external website hosting services
                    to address software or hardware issues that are affecting website performance and availability </p>
            </div>
            <div class="right">
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>HTML</h4>
                        <h4>98%</h4>
                    </div>
                    <span data-width="98%">98%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>CSS</h4>
                        <h4>97%</h4>
                    </div>
                    <span data-width="97%">97%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>JavaScript</h4>
                        <h4>90%</h4>
                    </div>
                    <span data-width="90%">90%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>BootStrap</h4>
                        <h4>98%</h4>
                    </div>
                    <span data-width="98%">98%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>SASS</h4>
                        <h4>94%</h4>
                    </div>
                    <span data-width="94%">94%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>Veu.JS</h4>
                        <h4>85%</h4>
                    </div>
                    <span data-width="85%">85%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>React.JS</h4>
                        <h4>95%</h4>
                    </div>
                    <span data-width="95%">95%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>Gulp.Js</h4>
                        <h4>89%</h4>
                    </div>
                    <span data-width="89%">89%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>Pug.Js</h4>
                        <h4>89%</h4>
                    </div>
                    <span data-width="89%">89%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>Command Line</h4>
                        <h4>95%</h4>
                    </div>
                    <span data-width="95%">95%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>JSON</h4>
                        <h4>93%</h4>
                    </div>
                    <span data-width="93%">93%</span>
                </div>
                <div class="row" data-aos="fade-down">
                    <div class="Name">
                        <h4>AJEX</h4>
                        <h4>95%</h4>
                    </div>
                    <span data-width="95%">95%</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================================== Portfolio ===================================== -->
    <section class="Portfolio" id="Portfolio">
        <div class="title" data-aos="fade-up" data-aos-delay="150">
            <h1>My Works</h1>
            <span>Some Of My Previous Work</span>
        </div>
        <div class="Catagory">
            <div class="box" data-aos="fade-up" data-aos-delay="50">
                <a href="./My-Works/Quarter/HTML/Pages/index.html" target="_blank">
                    <img src="./images/Quarter.ico" />
                    <h3>Quarter</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="150">
                <a href="./My-Works/Halloween/index.html" target="_blank">
                    <img src="./images/Halloween.ico" />
                    <h3>Halloween</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="250">
                <a href="https://shehab-ayman.000webhostapp.com" target="_blank">
                    <img src="./images/Ecommerce.ico" />
                    <h3>E-commerce</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="350">
                <a href="./My-Works/Education/index.html" target="_blank">
                    <img src="./images/Education.ico" />
                    <h3>Education</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="450">
                <a href="./My-Works/Christmas/index.html" target="_blank">
                    <img src="./images/Christmas.ico" />
                    <h3>Christmas</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="550">
                <a href="./My-Works/personal portfolio/home.html" target="_blank">
                    <img src="./images/Porftolio.ico" />
                    <h3>Your CV</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="550">
                <a href="./My-Works/Journey/index.html" target="_blank">
                    <img src="./images/Journy.ico" />
                    <h3>Journy</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="150">
                <a href="./My-Works/Nova Hospital/index.html" target="_blank">
                    <img src="./images/NovaHosiptal.ico" />
                    <h3>Nova Hospital</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="250">
                <a href="./My-Works/SEO/HTML/index.html" target="_blank">
                    <img src="./images/Seo.ico" />
                    <h3>SEO Website</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="350">
                <a href="./My-Works/cars website/index.html" target="_blank">
                    <img src="./images/Cars.ico" />
                    <h3>cars Store</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="450">
                <a href="./My-Works/fitness website/index.html" target="_blank">
                    <img src="./images/Fitness.ico" />
                    <h3>fitness website</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="550">
                <a href="./My-Works/coffee/index.html" target="_blank">
                    <img src="./images/Coffee.ico" />
                    <h3>coffee Store</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="150">
                <a href="./My-Works/Eduford/index.html" target="_blank">
                    <img src="./images/Eduford.ico" />
                    <h3>Eduford College</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="250">
                <a href="./My-Works/Fashion1/index.html" target="_blank">
                    <img src="./images/Fashion1.ico" />
                    <h3>Fashion Store</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="350">
                <a href="./My-Works/food website/index.html" target="_blank">
                    <img src="./images/Foods.ico" />
                    <h3>foods Store</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="450">
                <a href="./My-Works/grocery website/index.html" target="_blank">
                    <img src="./images/Grocery.ico" />
                    <h3>grocery website</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="550">
                <a href="./My-Works/travel/index.html" target="_blank">
                    <img src="./images/Travel2.ico" />
                    <h3>travel Online-Booking</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="150">
                <a href="./My-Works/Vegeterian/index.HTML" target="_blank">
                    <img src="./images/Vegetarian.ico" />
                    <h3>Vegeterian Store</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="250">
                <a href="./My-Works/books webstie/index.html" target="_blank">
                    <img src="./images/Books.ico" />
                    <h3>Books Store</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="350">
                <a href="./My-Works/hospital website/index.html" target="_blank">
                    <img src="./images/Doctors.png" />
                    <h3>Doctor's Website</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="450">
                <a href="./My-Works/music gallery/" target="_blank">
                    <img src="./images/Music.ico" />
                    <h3>Music Player</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="550">
                <a href="./My-Works/online education/index.html" target="_blank">
                    <img src="./images/Online-Eduford.ico" />
                    <h3>Online-Eduford</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="150">
                <a href="./My-Works/Barber_Shop/index.HTML" target="_blank">
                    <img src="./images/Burber.ico" />
                    <h3>Barber Shop</h3>
                </a>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay="250">
                <a href="./My-Works/Fashion2/index.html" target="_blank">
                    <img src="./images/Fashion2.ico" />
                    <h3>Fashion Website</h3>
                </a>
            </div>
        </div>
    </section>

    <!-- ==================================== Contact ======================================= -->
    <section class="Contact" id="Contact">
        <div class="title2">
            <h1>Contact Me</h1>
            <span>Send To Me</span>
        </div>
        <div class="Catagory">
            <div class="left" data-aos="fade-right">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13651.431412873415!2d29.91622705!3d31.19695445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1635769765352!5m2!1sen!2seg"
                    width="500" height="550" style="border: 0" allowfullscreen="" loading="lazy">
                </iframe>
            </div>
            <div class="right">
                <h1><span>Contact</span> Us</h1>
                <div class="Errors" style="color: red">
                    <?php
                        if (isset($FormErrors)) {
                            foreach ($FormErrors as $Error) {
                                echo $Error . "<br/>";
                            }
                        }
                    ?>
                </div>
                <form method="POST" action="<?php echo $_SERVER["PHP_SELF"] ?>">
                    <div class="con" data-aos="zoom-in" data-aos-delay="150">
                        <label for="username" class="fa fa-user"></label>
                        <input type="text" placeholder="Enter Name" class="username" name="UserName" />
                    </div>
                    <div class="con" data-aos="zoom-in" data-aos-delay="250">
                        <label for="Email" class="fa fa-envelope"></label>
                        <input type="email" style="text-transform: initial" placeholder="Enter Email" class="username"
                            name="Email" />
                    </div>
                    <div class="con" data-aos="zoom-in" data-aos-delay="350">
                        <label for="Number" class="fa fa-phone"></label>
                        <input type="number" placeholder="Mobile Phone" class="username" name="Phone" />
                    </div>
                    <div class="con" data-aos="zoom-in" data-aos-delay="450">
                        <label for="Message" class="fa fa-envelope-open-text"></label>
                        <textarea placeholder="Your Message" class="username" name="Message"></textarea>
                    </div>
                    <button class="Style" data-aos="fade-up" data-aos-delay="550">Contact Now</button>
                </form>
            </div>
        </div>
    </section>

    <!-- ==================================== Footer ======================================== -->
    <footer>
        <div class="title" data-aos="fade-up" data-aos-delay="150">
            <h1>Footer</h1>
            <span>Follow My Wibsites</span>
        </div>
        <div class="Catagory">
            <div class="box" data-aos="zoom-in" data-aos-delay="250">
                <h2>Quick Links</h2>
                <div class="row">
                    <i class="fa fa-arrow-right"></i>
                    <a href="#Home">Home</a>
                </div>
                <div class="row">
                    <i class="fa fa-arrow-right"></i>
                    <a href="#About">About</a>
                </div>
                <div class="row">
                    <i class="fa fa-arrow-right"></i>
                    <a href="#Services">Services</a>
                </div>
                <div class="row">
                    <i class="fa fa-arrow-right"></i>
                    <a href="#Skills">Skills</a>
                </div>
                <div class="row">
                    <i class="fa fa-arrow-right"></i>
                    <a href="#Portfolio">My-Work</a>
                </div>
                <div class="row">
                    <i class="fa fa-arrow-right"></i>
                    <a href="#Contect">Contect</a>
                </div>
            </div>
            <div class="box" data-aos="zoom-in" data-aos-delay="250">
                <h2>Contact Me</h2>
                <div class="row">
                    <i class="fab fa-facebook-f"></i>
                    <a href="https://www.facebook.com/shehabcool94" target="_blank">facebook</a>
                </div>
                <div class="row">
                    <i class="fab fa-instagram"></i>
                    <a href="https://www.instagram.com/shehab_sty/" target="_blank">instagram</a>
                </div>
                <div class="row">
                    <i class="fab fa-linkedin-in"></i>
                    <a href="https://www.linkedin.com/in/shehab-ayman-44a3aa223/" target="_blank">linkedin</a>
                </div>
                <div class="row">
                    <i class="fa fa-envelope"></i>
                    <a href="#Contact" style="text-transform: lowercase">shehabayman365@gmail.com</a>
                </div>
            </div>
            <div class="box" data-aos="zoom-in" data-aos-delay="350">
                <h2>Contact Me</h2>
                <div class="row">
                    <i class="fa fa-phone"></i>
                    <p>+20 1067421381</p>
                </div>
                <div class="row">
                    <i class="fa fa-phone"></i>
                    <p>+20 1554566092</p>
                </div>
                <div class="row">
                    <i class="fab fa-whatsapp"></i>
                    <p>+20 1067421381</p>
                </div>
            </div>
        </div>
        <div class="Copy">
            <h1 data-aos="fade-right" data-aos-delay="250" data-aos-offset="0">
                Created By <span>Mr. Shehab Ayman</span> | All Rights Reserved</h1>
        </div>
    </footer>

    <!-- =============================== Scroll & Live Chat ================================= -->
    <i class="fas fa-caret-up Scroll"></i>
    <div class="elfsight-app-eff04b2a-ad8f-448d-85de-66029fe50175"></div>

    <!-- =================================== JavaScript ===================================== -->
    <!-- Import Typing Link -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>

    <!-- Live Chat -->
    <script src="./js/Live-Chat.js" defer></script>

    <!-- Import AOS Animation Link -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

    <script>
    AOS.init({
        delay: 150
    });
    </script>

    <!-- My Script -->
    <script src="./js/script.js"></script>
</body>

</html>