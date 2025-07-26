import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  stats = [
    {
      icon: 'bi bi-bar-chart-fill',
      value: 2500,
      description: 'مبيعات',
      percentage: '+15%'
    },
    {
      icon: 'bi bi-people-fill',
      value: 120,
      description: 'عملاء جدد',
      percentage: '+8%'
    }
  ];

  tasks = [
    {
      icon: 'bi bi-pencil-square',
      title: 'مهمة 1',
      desc: 'وصف المهمة الأولى'
    },
    {
      icon: 'bi bi-calendar3',
      title: 'مهمة 2',
      desc: 'وصف المهمة الثانية'
    },
    {
      icon: 'bi bi-wrench-adjustable',
      title: 'مهمة 3',
      desc: 'وصف المهمة الثالثة'
    }
  ];

  records = [
    ['بيان 1', 'بيان 2', 'بيان 3', 'بيان 4', 'بيان 5', 'بيان 6'],
    ['بيان 7', 'بيان 8', 'بيان 9', 'بيان 10', 'بيان 11', 'بيان 12']
  ];
}
