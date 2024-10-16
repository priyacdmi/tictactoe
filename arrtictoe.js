import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const Arrtic = ({navigation}) => {
    const [txt, settxt] = useState([])
    const [isDis, setDis] = useState([false, false, false, false, false, false, false, false, false])
    const [cnt, setcnt] = useState(0)
    const [win, setwin] = useState('')


    const tic = (no) => {
        var tempvar = [...txt]
        var tempdis = [...isDis]

        if (cnt % 2 == 0) {
            tempvar[no] = 'x'

        }
        else {
            tempvar[no] = 'o'

        }
        tempdis[no] = true;
        setDis(tempdis)
        settxt(tempvar);
        setcnt(cnt + 1)

    }


    function winner() {
        const combarr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < combarr.length; i++) {

            if (txt[combarr[i][0]] == 'x' && txt[combarr[i][1]] == 'x' && txt[combarr[i][2]] == 'x') {
                setwin('x win');
                setDis([true, true, true, true, true, true, true, true, true])

            }
            else if (txt[combarr[i][0]] == 'o' && txt[combarr[i][1]] == 'o' && txt[combarr[i][2]] == 'o') {
                setwin('o win');
                setDis([true, true, true, true, true, true, true, true, true])
            }

        }

    }
    const reset = () => {
        settxt(['', '', '', '', '', '', '', '', ''])
        setwin('')
        setcnt(0)
        setDis([false, false, false, false, false, false, false, false, false])
    }


    useEffect(() => {
        winner();

    }, [txt])

    useEffect(() => {
        var temp = []
        for (let i = 0; i < 9; i++) {
            temp.push("")
            settxt(temp)
        }

    }, [])


    return (
        <>
            <View style={{backgroundColor:'#ffa69e',flex:1}}>
             
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 180 }} >
                    {
                        txt.map((val, index) => {
                            return (
                                <Pressable disabled={isDis[index]} style={style.box} onPress={() => tic(index)}  >
                                    <Text style={style.txt}>{val}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View>

                <View>
                    <Text style={style.txt}>{win}</Text>
                </View>
                <View>
                    <Pressable onPress={reset}>
                        <Text style={style.txt}>Reset</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Arrtic;

const style = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        margin: 5,
        borderRadius: 8,
        backgroundColor: '#4f000b',
        borderColor:'#ce4257',
        borderWidth:5
    },
    txt: {
        fontSize: 40,
        alignContent: 'center',
        textAlign: 'center'
    }
})