export interface movieProps{
    adult: boolean
    backdrop_path: string
    id:number
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title:string
    vote_average:number
    vote_count: number
    budget:number
    revenue:number
    original_language:string

}


export const movieLang=(lang:string)=>{
switch(lang){
    case  'en':
        return "English"
    case 'fr':
        return "French"
    case 'ar':
        return 'Arabic'
    case 'es':
        return "Spanish"
    case 'de':
        return "German"
    case 'zh':
        return  "Chinese"
    case 'ko':
        return   "Korean"
    case 'ja':
        return "Japanese"
        
}

}