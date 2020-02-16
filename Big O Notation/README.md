All notes regarding my understanding of Big 0 Notation.

//////////////////

1. Motivate the idea of Big O Notation:
   in multiple implementations of the same function(multiple solutions to a problem) how would we calculate which is the best option?
   Big 0 is a system that calculates or "compares" the performance of each function to decide which function is the best for computing.

- A numeric representation of code(quality)
- Helps us identify inefficient points in our code
- Help to identify trade-offs for different applications with different approaches.

ext. installed:
.run- to run JS code in terminal(output tab) without any configs done.
(as you will see in BigONotation.js there will be multiple functions, highlight the piece of code you want to run, right-click and "run code" to compare the differences in the output tab)
.code-time- To track the amount of time spent on learning algos to get an accurate measure point to "time spent learning" to "proficient understanding"

How do we justify which of the 2 functions are better, and what does better mean?
-Time to compute the output?
-Less memory intensive?
-More readable for different devs?

-Time: As you can see we have 2 functions that are both the solution to the same problem. BigONotation2.js's computing speed is far more efficient than the first solution.
But the problem with time is that different machines will compute at different speeds and the output will vary from machine to machine.
It won’t mean that we will get the opposite results on different machines, but rather small deviations when 2 machines are compared, but deviations none the less.
Even on the same machine output will show deviations as you run the same code twice or maybe 3 times.
For fast Algos, speed measurements may not be enough as processing speeds can differ and therefore not a correct measuring point as its not constant.
