/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function lt(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
}
function rt(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}
   
function main(){
   lt();
   rt();
   lt();
   rt();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
