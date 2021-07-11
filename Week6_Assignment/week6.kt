fun luvMe (flower1: Int, flower2: Int): Boolean{
    return (flower1 % 2 == 0  && flower2 % 2 != 0)
}

fun main() {
    println (luvMe(6,6))
    println (luvMe(9,18))
    println (luvMe(22,17) )

}
