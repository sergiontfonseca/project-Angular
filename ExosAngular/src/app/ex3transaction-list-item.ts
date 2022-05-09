export interface TransactionListItem {
    id: string;
    date: Date | string;
    label: string;
    amount: number;
    balance: number;
}

export interface TransactionDetailItem {
    id: string;
    amount: number;
    balance: number;
    label: string;
    description: string;
    date: Date;    
}