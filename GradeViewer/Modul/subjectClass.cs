﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GradeViewer.Modul
{
    public class subjectClass
    {
        private int id { get; set; }
        private string name { get; set; }
        public void exchangeArray(Object[] row)
        {
            this.id = (int)row[0];
            this.name = (string)row[1];
        }
    }
}
