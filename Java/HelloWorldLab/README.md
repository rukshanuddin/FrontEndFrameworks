# cs-hello-world-lab

## Objectives

1. Install Java SDK >= 1.7
2. Print the version number to stdout

## Instructions

1. Install a recent Java runtime, if you haven't already. We recommend 1.8, but 1.7 will work, too.
1. If you've been following along on Learn, we've walked you through installing Java (both the JRE and the JDK).
1. But if you want to make sure, you can try running `java` or `javac` at your command line prompt. If it doesn't work, you probably don't have Java installed.
1. In `com.yourname.javacs.HelloWorld`, we've provided a function `getVersion()`. It should return your system's current version of Java.
   1. We want not only to make this function work but also to make sure that it prints a version compatible with the upcoming lessons.
   2. You might find the following information useful:
      1. You can print information to stdout (usually, your console) with `System.out.println()`.
      2. `System.getProperty()` will, you guessed it, get a system property (just pass in the name as a String, e.g. `System.getProperty("myProperty")`).
      3. The system properties `"java.version"` and `"java.specification.version"` will both return your system's current version of Java. The former, counter-intuitively, is more specific, and you might need to manipulate the `String` that it returns a bit more.
      4. `Double.parseDouble()` converts a `String` to a `Double`.

You can run `ant` or `learn-test` to test your results. Good luck!

### Working in Eclipse

If you would like to work on these labs in Eclipse, we recommend the following workflow:

1.  Use a Git client to clone your repository to your file system. We don't recommend importing directly from Git into Eclipse.
2.  In Eclipse, select File -> New -> Project...
3.  In the "Select a Wizard" dialog, select Java -> "Java Project from Exisiting Ant Build File". Click "Next".
4.  In the "Create a Project" dialog, give the new project a name, then click "Browse" and navigate to the `build.xml` file in the repository you just cloned. IMPORTANT: Select "Link to the build file in the file system" to avoid copying the files from the repository into the Eclipse work space. Then click "Finish".
5.  In Eclipse, open the project you just created. You should be able to run `HelloWorld.java` and `HelloWorldTest.java`. You should also be able to select the project and run it as a JUnit test.
6.  Once your program is working, go back to the cloned copy of the repository and run `learn-test`.
7.  Add, commit, and push any files you changed back to your repository on GitHub.
8.  When you go back to the Learn web interface, you should be able to "Run Local Tests" and "Submit Pull Request".
