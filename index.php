<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>

        <div class="main">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <h1>Javascript Objects</h1>

        <p id="myHouseObject"></p>

        <p id="personObject"></p>

        <p id="carObject"></p>

        <p id="familyObject"></p>

        <p id="familyObject2"></p>

        <p id="recipeObject"></p>

        <p id="bakeryObject"></p>

        <h1>javascript Object Methods</h1>

        <p>Objects with functions built inside of the have 'built-in methods'. These methods are specific to the objects and typically perform a tast related to the object's properties. Some of these built in methods include, document.write(), document.getElementById(), and console.log().</p>

        <p>document.write(myGreeting)</p>

        <p>In the above example, document in the object name, and .write() is the method. Somewhere, in the main document object, there exist method function called write() that is told to perform a certain action when invoked.</p>

        <p>There are thousands of other methods (ex. toUpperCase, toLowerCase, etc.) Each was built for a different purpose. While you are working with javascript, the best thing to keep in mind is that everything is an object and almost all javascropt objects have build-in methods. you reference more object and methods using the Mozilla Developer network (MDN): https://developer.mozilla.org/en-US/docs/Web/Javascript </p>

        <h1>PHP Classes &amp; Objects</h1>

        <p>in PHP, instead of objects, we largly use classes. The difference between an object and a class is that a class is usually the parent of an object. Think of a class in PHP as a template, and when you create anything based off of these templates, you create an object.</p>

        <!-- Add your site or application content here -->
        <?php 
        /* Below is a basic PHP class. */
        class Console {

            //declare our properties
            public $brand = 'Microsoft';
            public $version = 'Xbox One';

            //declare a method
            public function showConsole() {
                echo('<br>' . $this->brand . ' ' . $this->version);
            }

        }

        // Create an object from the above class and invoke the method.
        $myConsole = new Console();
        $myConsole->showConsole();

        /* Getters and Setters are prevalent in OOP languages as Javascript, Java, Ruby, and more. Getters and Setters are used to get properties and set properties within a class. */

        // Create a new class, using the class keyboard
        class Student {
            var $name;

            // Using a setter to set a propertie to accept a parameter in it's value.
            function set_name($my_name) {
                $this->name = $my->name;
            }

            // Using a getter to retrieve this name 
            function get_name() {
                return $this->name;
                echo('<br>Your Name is ' . $name);
            }
        }
        
        // Create Objects from the Student class
        $sharon = new Student();
        $sharon->set_name('Shanon Kerr');

        $corey = new Student();
        $corey->set_name('Corey Gilford');

        // Call the method in the Student class using the student object
        echo('<br> Student #1 ' . $sharon->get_name());
        echo('<br> Student #2 ' . $corey->get_name());


        
        ?> 

           

        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        </div>
    </body>
</html>
