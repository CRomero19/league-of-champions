import axios from 'axios'

export const allChampions = axios.create({
    baseURL: "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json",
    timeout: 6000,
})

export const eachChampion = axios.create({
    baseURL: "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/",
    timeout: 6000,
})