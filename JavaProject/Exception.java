// Java program that demonstrates the use of throw
class Exception
{
	static void fun()
	{
		
		try
		{
			throw new NullPointerException("NullPointer");
		}
		catch(NullPointerException e)
		{
			System.out.println("Caught inside fun().");
		}
	}

	public static void CheckAge(int age) throws ArithmeticException {
		if (age < 18) {
		  throw new ArithmeticException("You are not elgible");
		}
		else {
		  System.out.println("You are elgible");
		}
	  }

	public static void main(String args[])
	{
		try
		{
			fun();
		}
		catch(NullPointerException e)
		{
			System.out.println("Caught in main.");
		}
		CheckAge(16);
	}
}