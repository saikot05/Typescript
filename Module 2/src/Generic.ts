const wrapInArray = <T> (value: T) => {
    return [value];
};

const stringArr = wrapInArray<string>("Saikot");
const numberArr = wrapInArray<number>(123);
const boleanArr = wrapInArray<boolean>(true);

stringArr.map((item) => item.toUpperCase()); 

interface UserResponse {
    data : {
        name: string;
        role: string;
    }
    success: boolean;
    statusCode: number;
}

interface PostResponse {
    data : {
        title: string;
        description: string;
        date: string;
    }
    success: boolean;
    statusCode: number;
}

interface ApiResponse <T> {
    data: T;
    success: boolean;
    statusCode: number;
}

