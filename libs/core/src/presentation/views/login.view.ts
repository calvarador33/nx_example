
export interface LoginView{
    routeToHome: ()=> void
    showErrorModal:(error: string, tipo: number) => void
    showError:(error: string) => void
 }