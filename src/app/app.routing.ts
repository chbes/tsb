import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { InitComponent } from "./init/init.component"
import { BoardComponent } from "./board/board.component";
import { AddComponent } from "./add/add.component";
import { FinishComponent } from "./finish/finish.component";

const routes: Routes = [
    { path: "", redirectTo: "/init", pathMatch: "full" },
    { path: "init", component: InitComponent },
    { path: "board", component: BoardComponent },
    { path: "add", component: AddComponent },
    { path: "finish", component: FinishComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }