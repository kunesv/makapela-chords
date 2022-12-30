import { MatDialog } from '@angular/material/dialog';
import { Song } from './song/song';
import { Component } from '@angular/core';
import { SongDialogComponent } from './song-dialog/song-dialog.component';
import { Playlist } from './playlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) { }

  playlist: Playlist = {
    authorId: 'houba',
    title: 'Silvestr 2022',
    songs: [{
      title: 'Pánčo, Pánčo, Pánčo',
      text: `
Emi
Temným lesem Pánču nesem
Temným lesem Pánču nesem

G      D      G
Pánčo, Pánčo, Pánčo,
G       D    G
Proč ty už nekalčo?
G        D         C
Kdy Tvůj smích zas zazní?
C     D       G
Kdy zajdem do Lázní?
G   Emi
Kdo ví ...

      `
    },{
      title: 'První píseň',
      text: `
1:
    Ami        E              Ami
Tak jako se Ti stejská po tom lese,
    Ami          E              Ami
tak holce tvý se stejská po tom plese.
      G         D           G
Když tancovala měla přes míru
  G          D           G
a poblila si tu svou kanýru.

R:
  D           G         c
Ona řekla že jí to nevadí,
D            G          C
že jí stejně někdo pohladí.

Ami E Ami
Ami E Ami

2:
    Ami        E              Ami
Tak jako liška mládě v zubech nese,
    Ami           E            Ami
tak brtník medvěd někde v lese rve se.
      G              D         G
S tou holkou která v bílym baráku,
G        D          G
porodila dítě v roláku.

R:
  D           G         C
Ona řekla že jí to nevadí,
D            G          C
že jí stejně někdo pohladí.

Ami E Ami
Ami E Ami

3:
    Ami          E         Ami
Jak smrtka hlavy nelítostně kosí,
    Ami          E            Ami
tak nad krajinou kroužej roje vosí.
  G            D         G
A slunce k západu se obrací,
  G           D             G
a tahle holka splývá s matrací.

R:
  D           G         C
Ona řekla že jí to nevadí,
D            G          C
že jí stejně někdo pohladí.

Ami E Ami
Ami E
Ami E
Ami E Ami
`
    },{
      title: 'Poslední čundr',
      text: `
D           G           A        D
Za sebou na čundru hltám spoustu dní,

... atd.


      `
    },{
      title: 'Proudy',
      text: `
1.
     Dmi            C
Voda proudem z nebe padá,
        G             Dmi
já chci zůstat navždy mladá.
      Dmi        C
Ještě dej mi naposled,
     G           D
do čaje Ti kápnu med.

R:
       C        B
Proudy valí oblohou,
                  F
bouřka ještě nekončí.
      C           B
Schováme se pod duhou,
              C
spojíme si obočí.
      `
    },{
      title: 'Ach jo',
      text: `
G                     Ami
Když jsem šel na půdu pro dřevo,
D                   Emi
upad jsem a zvrk si koleno,
G               Ami
navíc mi netopí lednice,
D                  Emi
měla jí na starost vopice,
G                  Ami
tatarák měl prošlý balení,
D                 Emi
na hajzlu nohy mi dřevění,
G                   Ami
vlasy mám v polívce šedivý,
D                   Emi
vrásky mi na xichtě nechybí,
G               Ami
ná ná ná, ná ná ná,
D                   Emi
ná na ná, ná ná ná, ná na ná
G                  Ami
a k tomu to zvrklý koleno,
D                   Emi
lidičky, dnešek byl ...
      `
    },{
      title: 'Ohne Dich',
      text: `
Dmi Ami Gmi F Ami

1:
Dmi                 Ami
    Ich werde in die Tannen gehen
Gmi                F       Ami
Dahin wo ich sie zuletzt gesehn
Dmi                         Ami
    Doch der Abend wirft ein Tuch aufs Land
Gmi                       F     Ami
  Und auf die Wege hinterm Waldesrand
Dmi                         Ami
    Und der Wald er steht so schwartz und leer
Gmi
Weh mir of weh
F              Ami
  Und die Vögel signen nich mehr

R:
Dmi                            Ami
Ohne dich kann ich nicht sein, ohne dich
Gmi                          F         Ami
Mit dir bin ich auch allein, Ohne dich
Dmi                              Ami
Ohne dich zählt ich die Stunden, Ohne dich
Gmi                          F            Ami
Mit dir stehen die Sekunden, lohnen nicht

2:
Dmi                     Ami
    Auf den Ästen in den Gräben
Gmi                       F Ami
Ist es nun Still und ohne Leben
Dmi                      Ami
  Und das Atmen fällt mir ach so schwer
Gmi
  Weh mir oh weh
F              Ami
  Und die Vögel signen nich mehr

R:
Dmi                            Ami
Ohne dich kann ich nicht sein, ohne dich
Gmi                          F         Ami
Mit dir bin ich auch allein, Ohne dich
Dmi                              Ami
Ohne dich zählt ich die Stunden, Ohne dich
Gmi                          F            Ami
Mit dir stehen die Sekunden, lohnen nicht

B:
Dmi                      Ami
  Und das Atmen fällt mir ach so schwer
Gmi
  Weh mir oh weh
F              Ami
  Und die Vögel signen nich mehr

R:
Dmi                            Ami
Ohne dich kann ich nicht sein, ohne dich
Gmi                          F         Ami
Mit dir bin ich auch allein, Ohne dich
Dmi                              Ami
Ohne dich zählt ich die Stunden, Ohne dich
Gmi                          F             Ami
Mit dir stehen die Sekunden, lohnen nicht, Ohne dich

...
      `
    }]
  }

  songDetail(song: Song): void {
    const dialogRef = this.dialog.open(SongDialogComponent, {
      width: '100vw',
      height: '95vh',
      data: song
    })
  }
}
