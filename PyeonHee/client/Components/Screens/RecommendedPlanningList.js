import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import BackButton from '../Buttons/BackButton';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import BudgetItem from './BudgetItem';
import config from '../../config';
const url = config.url;

const RecommendedPlanningList = ({navigation}) => {
    const [userID, setUserID] = useState('');
    const [otherBudgetData, setOtherBudgetData] = useState([]);
    //for test
    
    let tempData = [
        {
            userAge: 26, 
            userIncome: '300', 
            userFixedExpense: 300, 
            userVariableExpense: 200, 
            userTier: 'Gold', 
            budgetPlanningID: 1,
        },
        {
            userAge: 26, 
            userIncome: '300', 
            userFixedExpense: 300, 
            userVariableExpense: 200, 
            userTier: 'Gold', 
            budgetPlanningID: 2,
        },
    ]
    useEffect(()=>{
        let tempID;
        AsyncStorage.getItem("userID")
        .then(
            (value) => {
                if (value !== null){
                    tempID=value
                    setUserID(tempID);
                }
            }
        )
        .then(()=>{
            console.log(tempID);
            /*
            fetch(`${url}/saveSelectBudgetPlan?userID=${tempID}`)   //get
            .then((response)=>response.json())
            .then((responseJson)=>{
                console.log('response data');
                console.log(responseJson);
                setOtherBudgetData(responseJson.budgetData);

                setLoading(true);
            })  
            */
        })
    }, [])   

    
        return (
            <View style={styles.appSize}>
                <View style={styles.appTopBar}>
                    <View style={styles.appTitlePosition}>
                        <View>
                            <Text style={styles.appTitle}>추천 예산 계획서</Text> 
                        </View>
                    </View>
                </View>   
                <ScrollView>
                    <View>
                        {
                        tempData.map(item => {
                        return <BudgetItem userAge={item.userAge} userTier={item.userTier} userIncome={item.userIncome} userFixedExpense={item.userFixedExpense} userVariableExpense={item.userVariableExpense} key={item.budgetPlanningID} budgetPlanningID={item.budgetPlanningID} navigation={navigation}/>;
                        })}
                    </View>
                </ScrollView>
            </View>
        )
}
const styles = StyleSheet.create({
    appSize: {
        flex: 1,
    },
    appTopBar: {
        height: 50,
        flexDirection: 'row',
        marginBottom: 5,
    },
    backButtonPosition: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column-reverse',
    },
    appTitlePosition: {
        flex: 10,
        flexDirection: 'column-reverse',
        marginLeft: 20,
        marginBottom: 5,
    },
    appTitle: {
        fontSize: 15,
    },
})
export default RecommendedPlanningList;