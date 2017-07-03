import { Component, OnInit } from '@angular/core';

export enum Leg {
  'Helm',
  'Belt',
  'Chest',
  'Pants',
  'Neck',
  'Cloak',
  'Netherlord',
  'Sephuz',
  'Aff_Bracers',
  'Trinket',
  'Boots',
  'Shoulders',
  'Demo_bracers',
  'Sacrolash'
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private legs = Leg;
  public showLegs = new Array<any>();

  private legIdMap: Map<string, number> = new Map([
    ['Helm', 132394],
    ['Belt', 132457],
    ['Chest', 151821],
    ['Pants', 132357],
    ['Neck', 132444],
    ['Cloak', 144364],
    ['Netherlord', 151649],
    ['Sephuz', 132452],
    ['Aff_Bracers', 132381],
    ['Trinket', 144259],
    ['Boots', 132455],
    ['Shoulders', 146666],
    ['Demo_bracers', 132379],
    ['Sacrolash', 132378]
  ]);

  constructor() {
    this.getLegs().forEach(element => {
      this.showLegs.push({ element: element, isActive: true });
    });
  }

  ngOnInit() {
  }

  getLegs(): Array<string> {
    var keys = Object.keys(this.legs);
    return keys.slice(keys.length / 2);
  }

  showLeg(leg): boolean {
    const showFirst = this.showLegs.find(item => item.element === leg.firstLeg);
    const showSecond = this.showLegs.find(item => item.element === leg.secondLeg);

    return showFirst.isActive && showSecond.isActive;
  }

  getItemId(name: string): number {
    return this.legIdMap.get(name)
  }

  public legList = [
    { firstLeg: 'Helm', secondLeg: 'Belt', damage: 1091522 },
    { firstLeg: 'Belt', secondLeg: 'Chest', damage: 1091307 },
    { firstLeg: 'Helm', secondLeg: 'Chest', damage: 1088840 },
    { firstLeg: 'Cloak', secondLeg: 'Belt', damage: 1085719 },
    { firstLeg: 'Belt', secondLeg: 'Pants', damage: 1080115 },
    { firstLeg: 'Belt', secondLeg: 'Neck', damage: 1079323 },
    { firstLeg: 'Helm', secondLeg: 'Pants', damage: 1077346 },
    { firstLeg: 'Helm', secondLeg: 'Neck', damage: 1076341 },
    { firstLeg: 'Helm', secondLeg: 'Cloak', damage: 1075560 },
    { firstLeg: 'Neck', secondLeg: 'Chest', damage: 1075197 },
    { firstLeg: 'Belt', secondLeg: 'Netherlord', damage: 1074579 },
    { firstLeg: 'Helm', secondLeg: 'Sephuz', damage: 1073744 },
    { firstLeg: 'Helm', secondLeg: 'Netherlord', damage: 1073657 },
    { firstLeg: 'Belt', secondLeg: 'Aff_Bracers', damage: 1073614 },
    { firstLeg: 'Cloak', secondLeg: 'Chest', damage: 1073176 },
    { firstLeg: 'Chest', secondLeg: 'Netherlord', damage: 1071735 },
    { firstLeg: 'Belt', secondLeg: 'Sephuz', damage: 1071179 },
    { firstLeg: 'Pants', secondLeg: 'Chest', damage: 1070569 },
    { firstLeg: 'Helm', secondLeg: 'Aff_Bracers', damage: 1069126 },
    { firstLeg: 'Sephuz', secondLeg: 'Chest', damage: 1068894 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Chest', damage: 1068825 },
    { firstLeg: 'Belt', secondLeg: 'Boots', damage: 1068132 },
    { firstLeg: 'Helm', secondLeg: 'Trinket', damage: 1067162 },
    { firstLeg: 'Belt', secondLeg: 'Trinket', damage: 1066748 },
    { firstLeg: 'Helm', secondLeg: 'Boots', damage: 1066422 },
    { firstLeg: 'Trinket', secondLeg: 'Chest', damage: 1066101 },
    { firstLeg: 'Belt', secondLeg: 'Demo_bracers', damage: 1065793 },
    { firstLeg: 'Helm', secondLeg: 'Demo_bracers', damage: 1065724 },
    { firstLeg: 'Belt', secondLeg: 'Sacrolash', damage: 1065040 },
    { firstLeg: 'Helm', secondLeg: 'Sacrolash', damage: 1063650 },
    { firstLeg: 'Demo_bracers', secondLeg: 'Chest', damage: 1063632 },
    { firstLeg: 'Neck', secondLeg: 'Pants', damage: 1063410 },
    { firstLeg: 'Boots', secondLeg: 'Chest', damage: 1063187 },
    { firstLeg: 'Belt', secondLeg: 'Shoulders', damage: 1062186 },
    { firstLeg: 'Cloak', secondLeg: 'Pants', damage: 1062147 },
    { firstLeg: 'Cloak', secondLeg: 'Neck', damage: 1062051 },
    { firstLeg: 'Sacrolash', secondLeg: 'Chest', damage: 1061849 },
    { firstLeg: 'Cloak', secondLeg: 'Sephuz', damage: 1061485 },
    { firstLeg: 'Helm', secondLeg: 'Shoulders', damage: 1059354 },
    { firstLeg: 'Neck', secondLeg: 'Sephuz', damage: 1058601 },
    { firstLeg: 'Cloak', secondLeg: 'Netherlord', damage: 1058129 },
    { firstLeg: 'Pants', secondLeg: 'Netherlord', damage: 1057893 },
    { firstLeg: 'Neck', secondLeg: 'Netherlord', damage: 1057278 },
    { firstLeg: 'Cloak', secondLeg: 'Aff_Bracers', damage: 1056844 },
    { firstLeg: 'Sephuz', secondLeg: 'Pants', damage: 1056688 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Neck', damage: 1056521 },
    { firstLeg: 'Cloak', secondLeg: 'Trinket', damage: 1054738 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Pants', damage: 1054688 },
    { firstLeg: 'Neck', secondLeg: 'Sacrolash', damage: 1054593 },
    { firstLeg: 'Cloak', secondLeg: 'Sacrolash', damage: 1053700 },
    { firstLeg: 'Trinket', secondLeg: 'Pants', damage: 1053496 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Sephuz', damage: 1053310 },
    { firstLeg: 'Neck', secondLeg: 'Trinket', damage: 1053177 },
    { firstLeg: 'Sephuz', secondLeg: 'Netherlord', damage: 1053060 },
    { firstLeg: 'Demo_bracers', secondLeg: 'Pants', damage: 1051714 },
    { firstLeg: 'Neck', secondLeg: 'Boots', damage: 1051435 },
    { firstLeg: 'Cloak', secondLeg: 'Demo_bracers', damage: 1051403 },
    { firstLeg: 'Cloak', secondLeg: 'Boots', damage: 1051176 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Netherlord', damage: 1050964 },
    { firstLeg: 'Neck', secondLeg: 'Demo_bracers', damage: 1049938 },
    { firstLeg: 'Boots', secondLeg: 'Pants', damage: 1049338 },
    { firstLeg: 'Trinket', secondLeg: 'Netherlord', damage: 1049187 },
    { firstLeg: 'Sacrolash', secondLeg: 'Pants', damage: 1048882 },
    { firstLeg: 'Boots', secondLeg: 'Netherlord', damage: 1047567 },
    { firstLeg: 'Trinket', secondLeg: 'Sephuz', damage: 1047081 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Boots', damage: 1046160 },
    { firstLeg: 'Demo_bracers', secondLeg: 'Netherlord', damage: 1046015 },
    { firstLeg: 'Sephuz', secondLeg: 'Boots', damage: 1045839 },
    { firstLeg: 'Neck', secondLeg: 'Shoulders', damage: 1045345 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Trinket', damage: 1045091 },
    { firstLeg: 'Cloak', secondLeg: 'Shoulders', damage: 1044212 },
    { firstLeg: 'Sacrolash', secondLeg: 'Sephuz', damage: 1043951 },
    { firstLeg: 'Sephuz', secondLeg: 'Shoulders', damage: 1043488 },
    { firstLeg: 'Demo_bracers', secondLeg: 'Sephuz', damage: 1043408 },
    { firstLeg: 'Pants', secondLeg: 'Shoulders', damage: 1043285 },
    { firstLeg: 'Trinket', secondLeg: 'Sacrolash', damage: 1042897 },
    { firstLeg: 'Sacrolash', secondLeg: 'Netherlord', damage: 1042845 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Sacrolash', damage: 1042580 },
    { firstLeg: 'Trinket', secondLeg: 'Boots', damage: 1041152 },
    { firstLeg: 'Trinket', secondLeg: 'Demo_bracers', damage: 1039461 },
    { firstLeg: 'Aff_Bracers', secondLeg: 'Shoulders', damage: 1039217 },
    { firstLeg: 'Sacrolash', secondLeg: 'Boots', damage: 1039039 },
    { firstLeg: 'Demo_bracers', secondLeg: 'Sacrolash', damage: 1038931 },
    { firstLeg: 'Demo_bracers', secondLeg: 'Boots', damage: 1038556 },
    { firstLeg: 'Boots', secondLeg: 'Shoulders', damage: 1036355 },
    { firstLeg: 'Trinket', secondLeg: 'Shoulders', damage: 1036108 },
    { firstLeg: 'Sacrolash', secondLeg: 'Shoulders', damage: 1034642 },
    { firstLeg: 'Demo_bracers', secondLeg: 'Shoulders', damage: 1033193 },
  ]

}
