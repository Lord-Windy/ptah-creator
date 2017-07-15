
export function createDefaultValue() {
    return {
        Name: "",
        Value: ""
    }
}

export function createDefaultCharacter() {
    return {
        ID: -1,
        Name: "",
        Description: "",
        Values: []
    }

}

export function createDefaultFunction() {
    return {
        ID: -1,
        Name: "",
        Description: "",
        Values: []
    };
}

export function createDefaultChildNode() {
    return {
        childID: -1,
        Dialogue: "",
        Description: "",
        Conditions: []
    }
}

export function createDefaultNode() {
    return {
        ID: -1,
        Title: -1,
        Description: "",
        Parent: -1,
        Children: [],
        Triggers: "", /**/
        X: 30,
        Y: 30

    };
}

export function createDefaultState() {
    return {
        StartingID: 0,
        ProjectName: "Place title here",
        Description: "The description",
        Author: "The Authors",
        UserID: -1,
        Characters: [],
        Functions: [],
        Nodes: [],
    };
}