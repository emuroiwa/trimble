﻿ 

namespace AuthWebApi.Models.Entities
{
  public class Customer
  {
    public int Id { get; set; }
    public string IdentityId { get; set; }
    public AppUser Identity { get; set; }  
    public string userType { get; set; }
    public string Locale { get; set; }
    public string Gender { get; set; }
  }
}
