package com.helloworld.tester;

import java.util.Arrays;
import java.util.Date;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world! I'm writing JAVAAA");

        // Primitive data type
        // byte -128 to 127
        byte myByte = 127;
        // short -32768 to 32767
        short myShort = 23_456;
        // long 8 bytes
        long myLong = 234253463;
        // int 4 bytes 2b
        int myInt = 232563456;
        // char Stores a single letter or ASCII values
        char myChar = 's';
        // boolean
        boolean myBoolean = true;

        // Non primitive data types
        String str = "100";

        System.out.println(myShort);

        Person alex = new Person("alex");
        Person mirima = alex;

        String name = "blablabla";
        System.out.println(name.toUpperCase());

        java.util.Date myBOD = new Date();

        boolean [] res = new boolean[4];
        System.out.println(Arrays.toString(res));

        int [] numma = {3,4,56,4,5,7,2};
        System.out.println(Arrays.toString(numma));

        for (int number : numma) {
            System.out.println(number);
        }

        Arrays.stream(numma).forEach(System.out::println);
        // do while loop execute at least once
        do {
            System.out.println("wawawa");
        }
        while (numma[0] < 0);

        Scanner scanner = new Scanner(System.in);
        System.out.println("whats yo name");


        String userName = scanner.nextLine();


        System.out.println( countLetters());

    }
    public static int countLetters() {
        return 0;
    }

    // Reference type
    static class Person {
        String name;

        Person(String name) {
            this.name = name;
        }
    }
};