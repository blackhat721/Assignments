// Your First Program

import java.util.Scanner;


class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
        System.out.print("Enter a number (between 0-6) : ");
        int n = 0;
        try (Scanner scanner = new Scanner(System.in)) {
            n = scanner.nextByte();
            ControlStatements obj = new ControlStatements();
            obj.printThoroughSwitch(n);
        }catch (Exception e) {
            System.out.println(e);
        }
        printOdd();
    }
    static void printOdd(){
        System.out.print("Enter a number : ");
        try (Scanner scanner = new Scanner(System.in)) {
            int num = scanner.nextByte();
            int i = 0;
            while (i < num) {
                if (i % 2 != 0)
                    continue;
   
                System.out.println(i);
                i++;
            }
        }catch (Exception e) {
            System.out.println(e.getClass());
        }
    }

}

class ControlStatements {

    // Control Statements Implementation
    ControlStatements(){

    }
    public void printThoroughSwitch(int n)  {

        // 1. BREAK using SWITCH case

        switch (n) {
            case 0:
                System.out.println("Its Sunday!");
                break;
            case 1:
                System.out.println("Its Monday!");
                break;
            case 2:
                System.out.println("Its Tuesday!");
                break;
            case 3:
                System.out.println("Its Wednesday!");
                break;
            case 4:
                System.out.println("Its Thursday!");
                break;
            case 5:
                System.out.println("Its Friday!");
                break;
            case 6:
                System.out.println("Its Saturday!");
                break;
            default:
                System.out.println("Enter a valid number.");

                // 2. using CONTINUE to print only even numbers till num.
                
        }
    }
    public void isValidToVote(int age){
        if(age>=18 && age<=60){
            System.out.println("Yes the Person is a Valid Voter" + age);
        }
        else if(age<18){
            System.out.println("Below the age limit" + age);
        }
        else{
            System.out.println("Above the age limit" + age);
        }
    }
}

